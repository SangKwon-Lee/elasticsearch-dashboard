export interface NetworkProps {
  page: number;
  dense: string;
  order: 'asc' | 'desc';
  orderBy: string;
  perPage: number;
  pageCount: number;
  tableData: NetworkList[];
  dataFiltered: NetworkList[];
  filterName: string;
  tableDataOption: string[];
  filterType: string;
  filterStatus: string;
  onSort: (id: string) => void;
  handlePerPage: (e: any) => void;
  onChangeDense: (event: any) => void;
  handlePage: (e: any, page: number) => void;
  handleFilterStatus: (event: any) => void;
  handleFilterName: (filterName: string) => void;
  handleFilterType: (event: any) => void;
}

export interface NetworkList {
  uniqueId: string;
  serviceType: string;
  group: string;
  channelId: string;
  serviceNodeName: string;
  transmitQueue: number;
  receiveQueue: number;
  numberOfCloseWait: number;
  links: number;
  port: number;
  sourceLinks: number;
  destLinks: number;
}

export interface NetworkTableRowType {
  row: NetworkList;
}

export interface NetworkDetailRow {
  row: {
    sourcePort: number;
    sourceIP: string;
    targetIP: string;
    targetPort: number;
    tcpState: string;
    transmitQueue: number;
    receiveQueue: number;
  };
}

export interface NetworkDetailList {
  sourcePort: number;
  sourceIP: string;
  targetIP: string;
  targetPort: number;
  tcpState: string;
  transmitQueue: number;
  receiveQueue: number;
}
