import dayjs from 'dayjs';
import React from 'react';
import { RootState } from 'src/store';
import { useQuery } from '@apollo/client';
import { TransactionMock } from 'src/_mock/_mockData';
import { TRANSACTION_LIST } from './Transaction.Query';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import TransactionPresenter from './Transaction.Presenter';
import useTable, { getComparator } from 'src/hooks/useTable';
import { TransactionListTableData } from './Transaction.Type';
const mode = process.env.REACT_APP_MODE;
const startDate = dayjs().add(9, 'hour').subtract(5, 'minute').toISOString().slice(0, -5) + '+0900';
const endDate = dayjs().add(9, 'hour').toISOString().slice(0, -5) + '+0900';

const TransactionContainer = () => {
  //* 테이블 검색 옵션 Redux
  const TransactionListOptions = useSelector((state: RootState) => state.transactionList);
  const { search, filterStatus, filterService } = TransactionListOptions;
  const dispatch = useDispatch();

  //* 테이블 query
  const { data, loading, fetchMore } = useQuery(TRANSACTION_LIST, {
    variables: {
      gte: startDate,
      lte: endDate,
    },
  });

  //* useTable 항목
  const { dense, order, orderBy, onSort, onChangeDense } = useTable({
    defaultOrderBy: 'time',
  });

  //* 테이블 목록
  const [tableData, setTableData] = useState<TransactionListTableData[]>([]);

  //* 테이블 페이지네이션
  const [perPage, setPerPage] = useState(25);
  const [pageCount, setPageCount] = useState(10);
  const [page, setPage] = useState(1);

  //* 테이블 검색 함수
  const handleFilterName = useCallback(async () => {
    try {
      const data = await fetchMore({
        variables: {
          gid: search,
          gte: dayjs().subtract(7, 'week').toISOString().slice(0, -5) + '+0900',
          lte: dayjs().add(9, 'hour').toISOString().slice(0, -5) + '+0900',
        },
      });
      setTableData(data.data?.transaction_lists);
      setPage(1);
    } catch (e) {
      console.log(e);
    }
  }, [fetchMore, search]);

  //* 테이블 페이지네이션 함수
  const handlePerPage = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  //*페이지 변경 함수
  const handlePage = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    page: number
  ) => {
    setPage(page);
  };

  //* 테이블 시간 조절
  const handleTime = async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const time = Number(e.target.value.replace('분', ''));
    try {
      const data = await fetchMore({
        variables: {
          gte: dayjs().add(9, 'hour').subtract(time, 'minute').toISOString().slice(0, -5) + '+0900',
          lte: dayjs().add(9, 'hour').toISOString().slice(0, -5) + '+0900',
        },
      });
      setTableData(data.data?.transaction_lists);
      setPage(1);
    } catch (e) {
      console.log(e);
    }
  };

  //* 테이블 필터 함수
  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterService,
    filterStatus,
  });

  function applySortFilter({
    tableData,
    comparator,
    filterService,
    filterStatus,
  }: {
    tableData: TransactionListTableData[];
    filterService: string;
    comparator: (a: any, b: any) => number;
    filterStatus: string;
  }) {
    const stabilizedThis = tableData.map((el, index) => [el, index] as const);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    tableData = stabilizedThis.map((el) => el[0]);
    if (filterService !== '전체') {
      // eslint-disable-next-line array-callback-return
      tableData = tableData.filter((item) => item.type === filterService);
    }
    if (filterStatus !== '전체') {
      // eslint-disable-next-line array-callback-return
      tableData = tableData.filter((item) => {
        return item.status === filterStatus;
      });
    }
    return tableData;
  }

  //* 페이지네이션 useEffect
  useEffect(() => {
    if (tableData) {
      let pageList = Math.ceil(dataFiltered.length / perPage);
      if (pageList <= 1) {
        pageList = 1;
      }
      setPageCount(pageList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage, dataFiltered]);

  //* 설정 변경시 페이지 초기회
  useEffect(() => {
    setPage(1);
  }, [filterStatus, filterService]);

  //* 테이블 목록 받아오는 useEffect
  useEffect(() => {
    if (mode === 'DEV') {
      setTableData(TransactionMock.TransactionMockUp);
    }
    if (!loading && data?.transaction_lists) {
      setTableData(data?.transaction_lists);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);

  return (
    <TransactionPresenter
      page={page}
      dense={dense}
      order={order}
      onSort={onSort}
      loading={loading}
      orderBy={orderBy}
      perPage={perPage}
      dispatch={dispatch}
      pageCount={pageCount}
      tableData={tableData}
      handlePage={handlePage}
      handleTime={handleTime}
      filterStatus={filterStatus}
      dataFiltered={dataFiltered}
      onChangeDense={onChangeDense}
      handlePerPage={handlePerPage}
      filterService={filterService}
      handleFilterName={handleFilterName}
      TransactionListOptions={TransactionListOptions}
    />
  );
};

export default React.memo(TransactionContainer);
