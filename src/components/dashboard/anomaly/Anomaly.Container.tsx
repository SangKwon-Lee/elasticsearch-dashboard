import dayjs from 'dayjs';
import { uniqBy } from 'lodash';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { ANOMALY_LIST } from './Anomaly.Query';
import AnomalyPresenter from './Anomaly.Presenter';
import useTable, { getComparator } from 'src/hooks/useTable';
import { AnomalyListMock, donutChartMock, LineChartMock, ScatterMock } from 'src/_mock/AnomalyMock';
import { AnomalyTableList, DonutChartType, LineChartType, ScatterChartType } from './Anomaly.Type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
const mode = process.env.REACT_APP_MODE;

const AnomalyContainer = () => {
  const dispatch = useDispatch();
  // const {filterId} = useSelector((state:RootState) =>)
  const [skip, setSkip] = useState(false);
  const { data, loading } = useQuery(ANOMALY_LIST, { skip });
  const [donutCahrt, setDonutChart] = useState<DonutChartType>({
    data: [],
    label: [],
    name: '',
  });
  const [lineChart, setLineChart] = useState<LineChartType>({
    name: '',
    data: [],
  });
  const [scatterCahrt, setScatterChart] = useState<ScatterChartType>({
    data: [],
  });

  //* 테이블
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tableData, setTableData] = useState<AnomalyTableList[]>([]);

  //* 테이블 데이터 옵션
  const [tableDataOption, setTableDataOption] = useState<string[]>([]);

  //* useTable
  const { dense, order, orderBy, onSort, onChangeDense } = useTable({
    defaultOrderBy: 'time',
  });

  //*테이블 검색
  const [filterStatus, setFilterStatus] = useState('전체');
  const [filterName, setFilterName] = useState('');
  const [filterType, setFilterType] = useState('전체');
  const [filterId, setFilterId] = useState('');

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

  // *id 검색
  const handleFilterId = (event: any) => {
    setFilterId(event);
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
    tableData: AnomalyTableList[];
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
          item.message.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      );
    }
    if (filterType !== '전체') {
      // eslint-disable-next-line array-callback-return
      tableData = tableData.filter((item) => item.kind === filterType);
    }
    if (filterStatus !== '전체') {
      // eslint-disable-next-line array-callback-return
      tableData = tableData.filter((item) => {
        return item.severity === filterStatus;
      });
    }
    if (filterId !== '') {
      // eslint-disable-next-line array-callback-return
      tableData = tableData.filter((item) => {
        return item.id === filterId;
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
      setTableData(AnomalyListMock);
      setDonutChart(donutChartMock);
      setLineChart(LineChartMock);
      setScatterChart(ScatterMock);
    } else {
      if (data && !loading) {
        let newArr = [
          '전체',
          //@ts-ignore
          ...uniqBy(data?.anomaly_data.alertData, 'kind').map((data) => data.kind),
        ];
        setTableData(data?.anomaly_data.alertData);
        setTableDataOption(newArr);
        setDonutChart(data?.anomaly_data.donutChart);
        setLineChart(data?.anomaly_data.lineGraph);
        setScatterChart(data?.anomaly_data.scatterChart);
        setSkip(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <AnomalyPresenter
      page={page}
      dense={dense}
      order={order}
      onSort={onSort}
      orderBy={orderBy}
      perPage={perPage}
      pageCount={pageCount}
      tableData={tableData}
      lineChart={lineChart}
      handlePage={handlePage}
      filterName={filterName}
      filterType={filterType}
      donutChart={donutCahrt}
      scatterChart={scatterCahrt}
      dataFiltered={dataFiltered}
      filterStatus={filterStatus}
      onChangeDense={onChangeDense}
      handlePerPage={handlePerPage}
      handleFilterId={handleFilterId}
      tableDataOption={tableDataOption}
      handleFilterType={handleFilterType}
      handleFilterName={handleFilterName}
      handleFilterStatus={handleFilterStatus}
    />
  );
};

export default AnomalyContainer;
