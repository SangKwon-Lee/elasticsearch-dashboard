export interface ServerTableData {
  name: string;
  status: string;
  cpuUsage: number;
  memoryUsage: number;
  serviceType: string;
  serviceInitial: string;
  diskUsage: {
    usage: number;
    fileSystem: string;
  };
  networkIn: {
    usage: number;
    unit: string;
  };
  networkOut: {
    usage: number;
    unit: string;
  };
}

export interface ServerProps {
  page: number;
  dense: string;
  order: 'asc' | 'desc';
  orderBy: string;
  perPage: number;
  pageCount: number;
  tableData: ServerTableData[];
  dataFiltered: ServerTableData[];
  filterStatus: string;
  filterName: string;
  onSort: (id: string) => void;
  handlePerPage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePage: (e: React.ChangeEvent<HTMLInputElement>, page: number) => void;
  handleFilterName: (filterName: string) => void;
  onChangeFilterStatus: (event: React.SyntheticEvent<Element, Event>, newValue: string) => void;
}

export interface ServerTableRowProsp {
  row: {
    name: string;
    status: string;
    cpuUsage: number;
    memoryUsage: number;
    serviceInitial: string;
    diskUsage: {
      usage: number;
      fileSystem: string;
    };
    networkIn: {
      unit: string;
      usage: number;
    };
    networkOut: {
      unit: string;
      usage: number;
    };
  };
}

export interface ServerTableToolbarProps {
  filterName: string;
  onFilterName: (value: string) => void;
}
