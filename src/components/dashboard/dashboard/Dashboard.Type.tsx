export interface DashboardPresenterProps {
  allTPS: LineGraph;
  mciTPS: LineGraph;
  fepTPS: LineGraph;
  eaiTPS: LineGraph;
  mciBar: BarGraph;
  fepBar: BarGraph;
  eaiBar: BarGraph;
  allResponse: LineGraph;
  mciResponse: LineGraph;
  fepResponse: LineGraph;
  eaiResponse: LineGraph;
  issueGraph: LineGraph;
  dailyTPS: LineGraph;
  issue: {
    name: string;
    data: {
      labels: string[];
      datasets: {
        borderColor: string;
        backgroundColor: string;
        data: number[];
        pointRadius: number;
      }[];
    };
    point: {
      warning: number;
      minor: number;
      major: number;
      critical: number;
    };
  };
  mciMemoryTop: TopData;
  fepMemoryTop: TopData;
  mciCpuTop: TopData;
  fepCpuTop: TopData;
  networkIn: LineGraph;
  networkOut: LineGraph;
  allDisk: LineGraph;
  allCpu: LineGraph;
}

interface TopData {
  name: string;
  topData: {
    name: string;
    data: number;
  }[];
}
interface LineGraph {
  name: string;
  data: {
    labels: string[];
    datasets: {
      label?: string;
      borderColor: string;
      backgroundColor: string;
      data: number[];
      pointRadius: number;
      lineTension?: number;
    }[];
  };
}

interface BarGraph {
  name: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      borderColor: string;
      backgroundColor: string;
      data: number[];
      pointRadius: number;
    }[];
  };
}

export interface TPSWidgetProps {
  data: LineGraph;
  response: LineGraph;
}

export interface IssueGraphWidgetProps {
  data: LineGraph;
}

export interface BarCartWidgetProps {
  data: BarGraph;
}

export interface LineChartWidgetProps {
  data: LineGraph;
}

export interface IssueWidgetProsp {
  data: {
    name: string;
    data: {
      labels: string[];
      datasets: {
        borderColor: string;
        backgroundColor: string;
        data: number[];
        pointRadius: number;
      }[];
    };
    point: {
      warning: number;
      minor: number;
      major: number;
      critical: number;
    };
  };
}

export interface TopThreeWidgetProps {
  data: {
    name: string;
    topData: {
      name: string;
      data: number;
    }[];
  }[];
  isPercent?: boolean;
}

export interface MultiLineGraphWidgetProps {
  data: LineGraph;
}
