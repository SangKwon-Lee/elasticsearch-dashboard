import { useQuery } from '@apollo/client';
import { uniqBy } from 'lodash';
import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { io } from 'socket.io-client';
import { NetworkList } from './Network.Type';
import { NETWORK_LIST } from './Network.Query';
import { NetworkMock } from 'src/_mock/_mockData';
import NetworkPresenter from './Network.Presenter';
import useTable, { getComparator } from 'src/hooks/useTable';
const mode = process.env.REACT_APP_MODE;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const socket = io('ws://172.16.106.21:4000/networkSummaryList');
const NetworkContainer = () => {
  //* 테이블 Query
  const { data, loading } = useQuery(NETWORK_LIST);

  //* 테이블 데이터
  const [tableData, setTableData] = useState<NetworkList[]>([]);

  //* 테이블 데이터 옵션
  const [tableDataOption, setTableDataOption] = useState<string[]>([]);

  //* useTable
  const { dense, order, orderBy, onSort, onChangeDense } = useTable({
    defaultOrderBy: 'time',
  });

  //* 테이블 검색
  const [filterStatus, setFilterStatus] = useState('전체');
  const [filterType, setFilterType] = useState('전체');
  const [filterName, setFilterName] = useState('');

  //* 테이블 페이지네이션
  const [perPage, setPerPage] = useState(25);
  const [pageCount, setPageCount] = useState(10);
  const [page, setPage] = useState(1);

  // * 탭 검색
  const handleFilterStatus = (event: any) => {
    setFilterStatus(event);
  };

  // * 유형 검색
  const handleFilterType = (event: any) => {
    setFilterType(event.target.value);
  };

  // * 이름 검색
  const handleFilterName = (event: any) => {
    setFilterName(event.target.value);
  };

  //* 테이블 페이지네이션 함수
  const handlePerPage = (e: any) => {
    setPerPage(e.target.value);
    setPage(1);
  };

  //*페이지 변경 함수
  const handlePage = (e: any, page: number) => {
    setPage(page);
  };

  //* 테이블 필터 함수
  const dataFiltered = applySortFilter({
    filterName,
    tableData,
    comparator: getComparator(order, orderBy),
    filterType,
    filterStatus,
  });

  function applySortFilter({
    filterName,
    tableData,
    comparator,
    filterType,
    filterStatus,
  }: {
    filterName: string;
    tableData: NetworkList[];
    filterType: string;
    comparator: (a: any, b: any) => number;
    filterStatus: any;
  }) {
    const stabilizedThis = tableData.map((el, index) => [el, index] as const);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    tableData = stabilizedThis.map((el) => el[0]);
    if (filterName) {
      tableData = tableData.filter(
        (item: Record<string, any>) =>
          item.channelId.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      );
    }
    // eslint-disable-next-line array-callback-return
    if (filterType !== '전체') {
      tableData = tableData.filter((item) => item.serviceType === filterType);
    }
    if (filterStatus !== '전체') {
      // eslint-disable-next-line array-callback-return
      tableData = tableData.filter((item) => {
        return item.serviceType === filterStatus;
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

  //* 테이블 목록 받아오는 useEffect
  useEffect(() => {
    if (mode === 'DEV') {
      setTableData(NetworkMock.NetworkListMock);
    }
    if (!loading && data?.network_summary) {
      setTableData(data?.network_summary);
    }
    if (tableData) {
      let newArr = ['전체', ...uniqBy(tableData, 'gropu').map((data) => data.group)];
      setTableDataOption(newArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // * 검색 옵션 변경
  useEffect(() => {
    if (filterStatus === '전체') {
      let newArr = ['전체', ...uniqBy(tableData, 'group').map((data) => data.group)];
      setFilterType('전체');
      setTableDataOption(newArr);
    } else {
      let newArr = [
        '전체',
        ...uniqBy(tableData, 'group')
          .filter((data) => data.serviceType === filterStatus)
          .map((data) => data.group),
      ];
      setFilterType('전체');
      setTableDataOption(newArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus]);

  // //* socket으로 받아오기
  // useEffect(() => {
  //   if (mode !== 'DEV') {
  //     socket.on('data', (data) => {
  //       setTableData(data);
  //     });
  //   }
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [tableData]);

  return (
    <NetworkPresenter
      page={page}
      dense={dense}
      order={order}
      onSort={onSort}
      orderBy={orderBy}
      perPage={perPage}
      pageCount={pageCount}
      tableData={tableData}
      handlePage={handlePage}
      filterName={filterName}
      filterType={filterType}
      dataFiltered={dataFiltered}
      filterStatus={filterStatus}
      onChangeDense={onChangeDense}
      handlePerPage={handlePerPage}
      tableDataOption={tableDataOption}
      handleFilterType={handleFilterType}
      handleFilterName={handleFilterName}
      handleFilterStatus={handleFilterStatus}
    />
  );
};

export default NetworkContainer;
