import { TransactionListState } from 'src/components/redux/transactionList';

export interface TransactionListTableData {
  gid: string;
  type: string;
  status: string;
  startTimestamp: string;
  endTimestamp: string;
  elapsedTime: string;
}
export interface TransactionDetailListTableData {
  gid: string;
  mstSeq: string;
  timestamp: string;
  serviceType: string;
  serviceCode: string;
  interfaceName: string;
  interfacePattern: string;
  sourceChannel: string;
  targetChannel: string;
  serviceNode: string;
  status: string;
  bankCode: string;
  bankName: string;
  errorMessage: string;
  interfaceId: string;
}

export interface TransactionNodes {
  id: number;
  type: string;
  data: {
    label: string;
    startTimestamp: string;
    endTimestamp: string;
    elapsedTime: string;
    node: string;
    userNo: string;
    status: string;
    interfaceId: string;
    interfaceName: string;
    interfacePattern: string;
    bankCode: string;
    bankName: string;
    beforeSendChannelCode: string;
    flowId: string;
    sourceChannel: string;
    sourceIpPort: string;
    targetChannel: string;
    targetIpPort: string;
    mstSeq: string;
    serviceCode: string;
    serviceType: string;
    firstSendChannelCode: string;
    branchCode: string;
    serviceName: string;
    message: string;
    errorMessage: string;
    secondLabel: string;
    details: {
      timestamp: string;
      step: string;
      status: string;
    };
    position: {
      x: number;
      y: number;
    };
    style: {
      border: string;
      backgroundColor: string;
      width: number;
      height: number;
      FlexDirection: string;
      display: string;
      alignItems: string;
      justifyContent: string;
      borderRadius: string;
    };
  };
}

export interface TransactionInfoDetailList {
  timestamp: string;
  step: string;
  status: string;
}

export interface TransactionEdges {
  id: string;
  source: string;
  target: string;
  sourceHandle: string;
  targetHandle: string;
  animated: string;
  style: {
    stroke: string;
  };
  label: string;
  labelStyle: {
    fill: string;
    fontWeight: string;
  };
  labelBgStyle: {
    fill: string;
  };
  markerEnd: {
    type: string;
  };
}

export interface TransactionListDetails {
  gid: string;
  mstSeq: string;
  serviceType: string;
  details: {
    timestamp: string;
    step: string;
    status: string;
  };
}

export interface TransactionPresenterProps {
  page: number;
  dense: string;
  loading: boolean;
  order: 'asc' | 'desc';
  onSort: (id: string) => void;
  orderBy: string;
  perPage: number;
  pageCount: number;
  tableData: TransactionListTableData[];
  dispatch: any;
  handlePage: (e: React.ChangeEvent<HTMLInputElement>, page: number) => void;
  handleTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePerPage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataFiltered: TransactionListTableData[];
  onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterService: string;
  filterStatus: string;
  handleFilterName: () => void;
  TransactionListOptions: TransactionListState;
}

export interface TransactionTableRowProps {
  row: TransactionListTableData;
}
export interface TransactionDetailTableRowProps {
  row: TransactionDetailListTableData;
  index?: string | number;
  handleListDetailData: (e: TransactionDetailListTableData) => void;
}

export interface TransactionModalTableRowProps {
  row: {
    status: string;
    step: string;
    timestamp: string;
  };
  index?: string | number;
}
export interface TransactionRowTableDetailRowProps {
  row: {
    status: string;
    step: string;
    timestamp: string;
  };
  index?: string | number;
  handleListDetailData?: any;
}

export interface TransactionModalNodeData {
  startTimestamp: string;
  node: string;
  label: string;
  status: string;
  endTimestamp: string;
  elapsedTime: string;
  interfaceId: string;
  interfaceName: string;
  interfacePattern: string;
  bankName: string;
  bankCode: string;
  branchCode: string;
  sourceChannel: string;
  sourceIpPort: string;
  flowId: string;
  targetChannel: string;
  targetIpPort: string;
  mstSeq: string;
  serviceCode: string;
  serviceType: string;
  serviceName: string;
  userNo: string;
  firstSendChannelCode: string;
  message: string;
  errorMessage: string;
  beforeSendChannelCode: string;
  details: {
    status: string;
    step: string;
    timestamp: string;
  }[];
}

export interface TransactionModalContainerNodeData {
  nodeData: TransactionModalNodeData | null;
}
