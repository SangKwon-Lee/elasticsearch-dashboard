import useTabs from 'src/hooks/useTabs';
import { useEffect, useState } from 'react';
import ServerPresenter from './Server.Presenter';
import useTable, { getComparator } from 'src/hooks/useTable';
import { ServerMock } from 'src/_mock/_mockData';
import { io } from 'socket.io-client';
import { ServerTableData } from './Server.Type';

const mode = process.env.REACT_APP_MODE;

const ServerContainer = () => {
  //* 테이블
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tableData, setTableData] = useState<ServerTableData[]>([]);

  useEffect(() => {
    const socket = io('ws://172.16.106.21:4000/serverList');
    if (mode !== 'DEV') {
      socket.on('data', (data) => {
        setTableData(data);
      });
    }
    return () => {
      socket.disconnect();
    };
  });

  //*테이블 검색
  const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } = useTabs('전체');
  const [filterName, setFilterName] = useState('');

  //* useTable
  const { dense, order, orderBy, onSort, onChangeDense } = useTable({
    defaultOrderBy: 'time',
  });

  //* 테이블 페이지네이션
  const [perPage, setPerPage] = useState(25);
  const [pageCount, setPageCount] = useState(10);
  const [page, setPage] = useState(1);

  //* 테이블 검색 함수
  const handleFilterName = async (filterName: string) => {
    setFilterName(filterName);
    setPage(1);
  };

  //* 테이블 페이지네이션 함수
  const handlePerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  //*페이지 변경 함수
  const handlePage = (__: React.ChangeEvent<HTMLInputElement>, page: number) => {
    setPage(page);
  };

  //* 테이블 필터 함수
  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterStatus,
  });

  function applySortFilter({
    tableData,
    comparator,
    filterName,
    filterStatus,
  }: {
    tableData: ServerTableData[];
    filterName: string;
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
    if (filterName) {
      tableData = tableData.filter(
        (item: Record<string, any>) =>
          item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      );
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
  }, [filterName, filterStatus]);

  useEffect(() => {
    if (mode === 'DEV') {
      setTableData(ServerMock.ServerList);
    }
  }, []);

  return (
    <ServerPresenter
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
      dataFiltered={dataFiltered}
      filterStatus={filterStatus}
      onChangeDense={onChangeDense}
      handlePerPage={handlePerPage}
      handleFilterName={handleFilterName}
      onChangeFilterStatus={onChangeFilterStatus}
    />
  );
};

export default ServerContainer;
