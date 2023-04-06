import { useEffect, useState } from 'react';
import {
  BarWidghtMak1,
  BarWidghtMak2,
  BarWidghtMak3,
  DailyTPSMake1,
  IssueWidgetMake,
  IssueWidgetMake2,
  MultiLineWidgetMake1,
  MultiLineWidgetMake2,
  MultiLineWidgetMake3,
  MultiLineWidgetMake4,
  TopThreeWidgetMake1,
  TopThreeWidgetMake2,
  TopThreeWidgetMake3,
  TopThreeWidgetMake4,
  TPSWidgetMake1,
  TPSWidgetMake2,
  TPSWidgetMake3,
  TPSWidgetMake4,
} from 'src/_mock/DashboardMock';
import DashboardPresenter from './Dashboard.Presenter';
const DashboardContainer = () => {
  const [allTPS, setAllTPS] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [mciTPS, setMciTPS] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [fepTPS, setFepTPS] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [eaiTPS, setEaiTPS] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [allResponse, setAllResponse] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [mciResponse, setMciResponse] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [fepResponse, setFepResponse] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [eaiResponse, setEaiResponse] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [issueGraph, setIssueGraph] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [issue, setIssue] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
    point: {
      warning: 0,
      minor: 0,
      major: 0,
      critical: 0,
    },
  });

  const [mciBar, setMciBar] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          label: '',
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });
  const [fepBar, setFepBar] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          label: '',
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });
  const [eaiBar, setEaiBar] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          label: '',
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
        },
      ],
    },
  });

  const [dailyTPS, setDailyTPS] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          label: '',
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  });

  const [mciMemoryTop, setMciMemoeyTop] = useState({
    name: '',
    topData: [
      {
        name: '',
        data: 0,
      },
    ],
  });

  const [fepMemoryTop, setFepMemoeyTop] = useState({
    name: '',
    topData: [
      {
        name: '',
        data: 0,
      },
    ],
  });

  const [mciCpuTop, setMciCpuTop] = useState({
    name: '',
    topData: [
      {
        name: '',
        data: 0,
      },
    ],
  });

  const [fepCpuTop, setFepCpuTop] = useState({
    name: '',
    topData: [
      {
        name: '',
        data: 0,
      },
    ],
  });

  const [networkIn, setNetworkIn] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          label: '',
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  });
  const [networkOut, setNetworkOut] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          label: '',
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  });
  const [allCpu, setAllCpu] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          label: '',
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  });
  const [allDisk, setAllDisk] = useState({
    name: '',
    data: {
      labels: [''],
      datasets: [
        {
          label: '',
          borderColor: '',
          backgroundColor: '',
          data: [0],
          pointRadius: 0,
          lineTension: 0.3,
        },
      ],
    },
  });

  useEffect(() => {
    setAllTPS(TPSWidgetMake1);
    setMciTPS(TPSWidgetMake2);
    setFepTPS(TPSWidgetMake3);
    setEaiTPS(TPSWidgetMake4);
    setAllResponse(TPSWidgetMake1);
    setMciResponse(TPSWidgetMake2);
    setFepResponse(TPSWidgetMake3);
    setEaiResponse(TPSWidgetMake4);
    setIssueGraph(IssueWidgetMake);
    setIssue(IssueWidgetMake2);
    setMciBar(BarWidghtMak1);
    setFepBar(BarWidghtMak2);
    setEaiBar(BarWidghtMak3);
    setDailyTPS(DailyTPSMake1);
    setMciMemoeyTop(TopThreeWidgetMake1);
    setFepMemoeyTop(TopThreeWidgetMake2);
    setMciCpuTop(TopThreeWidgetMake3);
    setFepCpuTop(TopThreeWidgetMake4);
    setNetworkIn(MultiLineWidgetMake1);
    setNetworkOut(MultiLineWidgetMake2);
    setAllCpu(MultiLineWidgetMake3);
    setAllDisk(MultiLineWidgetMake4);
  }, []);

  return (
    <DashboardPresenter
      issue={issue}
      allTPS={allTPS}
      mciTPS={mciTPS}
      fepTPS={fepTPS}
      eaiTPS={eaiTPS}
      mciBar={mciBar}
      fepBar={fepBar}
      eaiBar={eaiBar}
      dailyTPS={dailyTPS}
      issueGraph={issueGraph}
      allResponse={allResponse}
      mciResponse={mciResponse}
      fepResponse={fepResponse}
      eaiResponse={eaiResponse}
      mciMemoryTop={mciMemoryTop}
      fepMemoryTop={fepMemoryTop}
      mciCpuTop={mciCpuTop}
      fepCpuTop={fepCpuTop}
      networkIn={networkIn}
      networkOut={networkOut}
      allDisk={allDisk}
      allCpu={allCpu}
    />
  );
};

export default DashboardContainer;
