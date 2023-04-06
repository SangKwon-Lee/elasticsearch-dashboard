import dayjs from 'dayjs';

export const AnomalyListMock = [
  {
    severity: '위험',
    kind: '그룹별 로그비율',
    message: '그룹별 로그 비율 이상징후 발생',
    timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    score: 50,
    kibanaUrl: '',
    id: '',
  },
  {
    severity: '주의',
    kind: '송신큐',
    message: '송신큐 로그 비율 이상징후 발생',
    timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    score: 50,
    kibanaUrl: '',
    id: '',
  },
  {
    severity: '치명',
    kind: '서버 메모리',
    message: '서버 메모리 사용률 이상징후 발생',
    timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    score: 50,
    kibanaUrl: '',
    id: '',
  },
  {
    severity: '경고',
    kind: '그룹별 로그비율',
    message: '그룹별 로그 비율 이상징후 발생',
    timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    score: 50,
    kibanaUrl: '',
    id: '',
  },
  {
    severity: '치명',
    kind: '그룹별 로그비율',
    message: '그룹별 로그 비율 이상징후 발생',
    timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    score: 50,
    kibanaUrl: '',
    id: '',
  },
];

export const donutChartMock = {
  data: [50, 38, 10, 23],
  label: ['주의', '경고', '위험', '치명'],
  name: 'donutChart',
};

export const LineChartMock = {
  name: 'lineGraph',
  data: [
    {
      name: '송신큐',
      data: [
        {
          x: '2022-10-01',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-02',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-03',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-04',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-05',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-06',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-07',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-08',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-09',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-10',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-11',
          y: Math.floor(Math.random() * 100),
        },
      ],
    },
    {
      name: '전송큐',
      data: [
        {
          x: '2022-10-01',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-02',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-03',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-04',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-05',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-06',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-07',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-08',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-09',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-10',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-11',
          y: Math.floor(Math.random() * 100),
        },
      ],
    },
    {
      name: '이상징후',
      data: [
        {
          x: '2022-10-01',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-02',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-03',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-04',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-05',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-06',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-07',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-08',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-09',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-10',
          y: Math.floor(Math.random() * 100),
        },
        {
          x: '2022-10-11',
          y: Math.floor(Math.random() * 100),
        },
      ],
    },
  ],
};

export const ScatterMock = {
  data: [
    {
      backgroundColor: '',
      label: '그룹별 로그 비율',
      data: [
        {
          x: '2022-10-01',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-02',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-03',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-04',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-05',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-06',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-07',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-08',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-09',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-10',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
        {
          x: '2022-10-11',
          y: Math.floor(Math.random() * 100),
          id: '',
        },
      ],
    },
  ],
};
