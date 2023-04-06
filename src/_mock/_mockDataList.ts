export const InterfaceList = () => {
  return [
    {
      circle: 'green',
      trafic: Math.floor(Math.random() * 100000),
      yester: Math.floor(Math.random() * 100),
      anomalies: true,
      deal: Math.floor(Math.random() * 100),
    },
    {
      circle: 'green',
      trafic: Math.floor(Math.random() * 100000),
      yester: Math.floor(Math.random() * 100),
      anomalies: false,
      deal: Math.floor(Math.random() * 100),
    },
    {
      circle: 'red',
      trafic: Math.floor(Math.random() * 100000),
      yester: Math.floor(Math.random() * 100),
      anomalies: false,
      deal: Math.floor(Math.random() * 100),
    },
    {
      circle: 'green',
      trafic: Math.floor(Math.random() * 100000),
      yester: Math.floor(Math.random() * 100),
      anomalies: false,
      deal: Math.floor(Math.random() * 100),
    },
    {
      circle: 'green',
      trafic: Math.floor(Math.random() * 100000),
      yester: Math.floor(Math.random() * 100),
      anomalies: false,
      deal: Math.floor(Math.random() * 100),
    },
    {
      circle: 'green',
      trafic: Math.floor(Math.random() * 100000),
      yester: Math.floor(Math.random() * 100),
      anomalies: false,
      deal: Math.floor(Math.random() * 100),
    },
    {
      circle: 'green',
      trafic: Math.floor(Math.random() * 100000),
      yester: Math.floor(Math.random() * 100),
      anomalies: true,
      deal: Math.floor(Math.random() * 100),
    },
  ];
};
export const InterfaceTitleList1 = [
  '통합단말',
  '이기종서비스',
  '저축은행',
  'CD-ATM',
  '인터넷뱅킹',
  '모바일',
  '텔레뱅킹',
];

export const InterfaceTitleList2 = [
  '금융결재원',
  '한국은행',
  '은행연합회',
  'VAN사',
  'NICE',
  '카드사',
  '제휴기관',
];

export const InterfaceTitleList3 = ['MCI #1', 'MCI #2', 'MCI #3', 'MCI #4'];

export const InterfaceTitleList4 = ['FEP #1', 'FEP #2', 'FEP #3', 'FEP #4'];

export const InterfaceDataList1 = [
  {
    circle: 'green',
    trafic: Math.floor(Math.random() * 100),
    yester: Math.floor(Math.random() * 100),
    anomalies: true,
  },
  {
    circle: 'green',
    trafic: Math.floor(Math.random() * 100),
    yester: Math.floor(Math.random() * 100),
    anomalies: false,
  },
  {
    circle: 'red',
    trafic: Math.floor(Math.random() * 100),
    yester: Math.floor(Math.random() * 100),
    anomalies: false,
  },
  {
    circle: 'green',
    trafic: Math.floor(Math.random() * 100),
    yester: Math.floor(Math.random() * 100),
    anomalies: false,
  },
  {
    circle: 'green',
    trafic: Math.floor(Math.random() * 100),
    yester: Math.floor(Math.random() * 100),
    anomalies: false,
  },
  {
    circle: 'green',
    trafic: Math.floor(Math.random() * 100),
    yester: Math.floor(Math.random() * 100),
    anomalies: false,
  },
  {
    circle: 'green',
    trafic: Math.floor(Math.random() * 100),
    yester: Math.floor(Math.random() * 100),
    anomalies: true,
  },
];

export const IssueList1 = [
  {
    title: 'Memory High',
    type: 'MCI',
    name: '노드1',
    reaseon: '메모리의 이상점수가 90 이상',
    isOpen: true,
  },
  {
    title: 'Memory Down',
    type: 'MCI',
    name: '노드2',
    reaseon: '메모리 부족',
    isOpen: true,
  },
  {
    title: 'Memory High',
    type: 'FEP',
    name: '노드1',
    reaseon: 'Java heap memory high',
    isOpen: false,
  },
];
