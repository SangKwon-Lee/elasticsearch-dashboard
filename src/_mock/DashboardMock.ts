import dayjs from 'dayjs';

const allColor = '#FF5630';
const mciColor = '#00AB55';
const fepColor = '#3366FF';
const eaiColor = '#FFAB00';

export const TPSWidgetMake1 = () => {
  return {
    name: '전체',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          borderColor: '#FF5630',
          backgroundColor: '#FF5630',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
        },
      ],
    },
  };
};
export const TPSWidgetMake2 = () => {
  return {
    name: 'MCI',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          borderColor: '#00AB55',
          backgroundColor: '#00AB55',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
        },
      ],
    },
  };
};
export const TPSWidgetMake3 = () => {
  return {
    name: 'FEP',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          borderColor: '#3366FF',
          backgroundColor: '#3366FF',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
        },
      ],
    },
  };
};
export const TPSWidgetMake4 = () => {
  return {
    name: 'EAI',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          borderColor: '#FFAB00',
          backgroundColor: '#FFAB00',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
        },
      ],
    },
  };
};

export const IssueWidgetMake = () => {
  return {
    name: '오류 거래',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          borderColor: '#FF5630',
          backgroundColor: '#FF5630',
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
        },
      ],
    },
  };
};

export const IssueWidgetMake2 = () => {
  return {
    name: '이상 징후',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          borderColor: '#FF5630',
          backgroundColor: '#FF5630',
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
        },
      ],
    },
    point: {
      warning: Math.floor(Math.random() * 10),
      minor: Math.floor(Math.random() * 10),
      major: Math.floor(Math.random() * 10),
      critical: Math.floor(Math.random() * 10),
    },
  };
};

export const BarWidghtMak1 = () => {
  return {
    name: 'MCI 당발채널 거래량 상위 (5분-실시간)',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          label: '저축은행 중앙회',
          borderColor: '#00AB55',
          backgroundColor: '#00AB55',
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
        },
      ],
    },
  };
};

export const BarWidghtMak2 = () => {
  return {
    name: 'FEP 당발채널 거래량 상위 (5분-실시간)',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          label: '이기종',
          borderColor: '#3366FF',
          backgroundColor: '#3366FF',
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
        },
      ],
    },
  };
};

export const BarWidghtMak3 = () => {
  return {
    name: 'EAI 당발채널 거래량 상위 (5분-실시간)',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          label: 'EAI 당발채널',
          borderColor: '#FFAB00',
          backgroundColor: '#FFAB00',
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
        },
      ],
    },
  };
};

export const DailyTPSMake1 = () => {
  return {
    name: 'TPS 추이',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          label: '전체',
          borderColor: allColor,
          backgroundColor: allColor,
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI',
          borderColor: mciColor,
          backgroundColor: mciColor,
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP',
          borderColor: fepColor,
          backgroundColor: fepColor,
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'EAI',
          borderColor: eaiColor,
          backgroundColor: eaiColor,
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  };
};

export const TPSWidgetMock = {
  name: 'MCI',
  data: {
    labels: [
      dayjs().format('HH:mm'),
      dayjs().format('HH:mm'),
      dayjs().format('HH:mm'),
      dayjs().format('HH:mm'),
      dayjs().format('HH:mm'),
      dayjs().format('HH:mm'),
      dayjs().format('HH:mm'),
      dayjs().format('HH:mm'),
    ],
    datasets: [
      {
        borderColor: '#fff',
        backgroundColor: '#fff',
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ],
        pointRadius: 0,
      },
    ],
  },
};

export const LineGraphWidgetMock = [
  {
    name: 'TPS 추이 (1시간)',
    time: [dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs()],
    data: [
      {
        name: 'GUID 거래수',
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ],
      },
      {
        name: 'MCI 거래수',
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ],
      },
      {
        name: 'FEP 거래수',
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ],
      },
    ],
  },
  {
    name: 'TPS 추이 (3시간)',
    time: [dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs(), dayjs()],
    data: [
      { name: 'GUID 거래수', data: [148, 91, 69, 62, 49, 51, 35, 41] },
      { name: 'MCI 거래수', data: [45, 77, 99, 88, 77, 56, 13, 34] },
      { name: 'FEP 거래수', data: [90, 32, 40, 18, 102, 182, 38, 76] },
    ],
  },
];

export const TopThreeWidgetMake1 = () => {
  return {
    name: 'MCI Memory Top',
    topData: [
      {
        name: 'FEP#1-6',
        data: Math.floor(Math.random() * 10),
      },
      {
        name: 'MCI#3-3',
        data: Math.floor(Math.random() * 10),
      },
      {
        name: 'MCI#2#6',
        data: Math.floor(Math.random() * 10),
      },
    ],
  };
};

export const TopThreeWidgetMake2 = () => {
  return {
    name: 'FEP Memory Top ',
    topData: [
      {
        name: 'FEP#1-6',
        data: Math.floor(Math.random() * 10),
      },
      {
        name: 'MCI#3-3',
        data: Math.floor(Math.random() * 10),
      },
      {
        name: 'MCI#2#6',
        data: Math.floor(Math.random() * 10),
      },
    ],
  };
};

export const TopThreeWidgetMake3 = () => {
  return {
    name: 'MCI CPU Top',
    topData: [
      {
        name: 'FEP#1-6',
        data: Math.floor(Math.random() * 10),
      },
      {
        name: 'MCI#3-3',
        data: Math.floor(Math.random() * 10),
      },
      {
        name: 'MCI#2#6',
        data: Math.floor(Math.random() * 10),
      },
    ],
  };
};

export const TopThreeWidgetMake4 = () => {
  return {
    name: 'FEP CPU Top',
    topData: [
      {
        name: 'FEP#1-6',
        data: Math.floor(Math.random() * 10),
      },
      {
        name: 'MCI#3-3',
        data: Math.floor(Math.random() * 10),
      },
      {
        name: 'MCI#2#6',
        data: Math.floor(Math.random() * 10),
      },
    ],
  };
};

export const MultiLineWidgetMake1 = () => {
  return {
    name: '네트워크 IN',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          label: 'MCI1',
          borderColor: allColor,
          backgroundColor: allColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI2',
          borderColor: mciColor,
          backgroundColor: mciColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI3',
          borderColor: fepColor,
          backgroundColor: fepColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI4',
          borderColor: eaiColor,
          backgroundColor: eaiColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP1',
          borderColor: '#61F3F3',
          backgroundColor: '#61F3F3',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP2',
          borderColor: '#919EAB',
          backgroundColor: '#919EAB',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP3',
          borderColor: '#1B806A',
          backgroundColor: '#1B806A',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  };
};

export const MultiLineWidgetMake2 = () => {
  return {
    name: '네트워크 OUT',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          label: 'MCI1',
          borderColor: allColor,
          backgroundColor: allColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI2',
          borderColor: mciColor,
          backgroundColor: mciColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI3',
          borderColor: fepColor,
          backgroundColor: fepColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI4',
          borderColor: eaiColor,
          backgroundColor: eaiColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP1',
          borderColor: '#61F3F3',
          backgroundColor: '#61F3F3',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP2',
          borderColor: '#919EAB',
          backgroundColor: '#919EAB',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP3',
          borderColor: '#1B806A',
          backgroundColor: '#1B806A',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  };
};

export const MultiLineWidgetMake3 = () => {
  return {
    name: '전체 CPU 현황',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          label: 'MCI1',
          borderColor: allColor,
          backgroundColor: allColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI2',
          borderColor: mciColor,
          backgroundColor: mciColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI3',
          borderColor: fepColor,
          backgroundColor: fepColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI4',
          borderColor: eaiColor,
          backgroundColor: eaiColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP1',
          borderColor: '#61F3F3',
          backgroundColor: '#61F3F3',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP2',
          borderColor: '#919EAB',
          backgroundColor: '#919EAB',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP3',
          borderColor: '#1B806A',
          backgroundColor: '#1B806A',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  };
};

export const MultiLineWidgetMake4 = () => {
  return {
    name: '전체 DISK 현황',
    data: {
      labels: [
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
        dayjs().format('HH:mm'),
      ],
      datasets: [
        {
          label: 'MCI1',
          borderColor: allColor,
          backgroundColor: allColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI2',
          borderColor: mciColor,
          backgroundColor: mciColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI3',
          borderColor: fepColor,
          backgroundColor: fepColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'MCI4',
          borderColor: eaiColor,
          backgroundColor: eaiColor,
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP1',
          borderColor: '#61F3F3',
          backgroundColor: '#61F3F3',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP2',
          borderColor: '#919EAB',
          backgroundColor: '#919EAB',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
        {
          label: 'FEP3',
          borderColor: '#1B806A',
          backgroundColor: '#1B806A',
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  };
};
