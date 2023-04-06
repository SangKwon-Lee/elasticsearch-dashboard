export interface AnomalyTableList {
  severity: string;
  kind: string;
  message: string;
  timestamp: string;
  score: number;
  id: string;
  kibanaUrl: string;
}

export interface AnomalyPresenterProps {
  page: number;
  dense: string;
  order: 'asc' | 'desc';
  orderBy: string;
  perPage: number;
  pageCount: number;
  tableData: AnomalyTableList[];
  dataFiltered: AnomalyTableList[];
  filterName: string;
  filterType: string;
  filterStatus: string;
  tableDataOption: string[];
  onSort: (id: string) => void;
  handlePerPage: (e: any) => void;
  onChangeDense: (event: any) => void;
  handlePage: (e: any, page: number) => void;
  handleFilterStatus: (event: any) => void;
  handleFilterName: (filterName: string) => void;
  handleFilterType: (event: any) => void;
  donutChart: DonutChartType;
  scatterChart: ScatterChartType;
  lineChart: LineChartType;
  handleFilterId: (e: any) => void;
}

export interface AnomalyRowTableProps {
  row: AnomalyTableList;
}

export interface DonutChartType {
  data: number[];
  label: string[];
  name: string;
}

export interface LineChartType {
  name: string;
  data: {
    name: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
}
export interface ScatterChartType {
  data: {
    backgroundColor: string;
    label: string;
    data: {
      x: string;
      y: number;
      id: string;
    }[];
  }[];
}
