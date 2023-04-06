import dayjs from 'dayjs';

export interface TPSWidgetProps {
  data?: {
    name: string;
    data: {
      data: number[];
      name: string;
    }[];
    type: string;
    time: dayjs.Dayjs[] | string[];
  };
  color?: string;
  response?: {
    name: string;
    data: {
      data: number[];
      name: string;
    }[];
    type: string;
    time: dayjs.Dayjs[] | string[];
  };
}

export interface RowBarWidgetProps {
  data: {
    name: string;
    data: {
      name: string;
      data: number[];
    }[];
  };
  color: string;
}

export interface RoundBartWidgetProps {
  data?: {
    name: string;
    data: number;
    topData: {
      name: string;
      data: number;
    }[];
  };
  icon: string;
}

export interface LineGraphWidgetProps {
  data: {
    name: string;
    time: dayjs.Dayjs[] | string[];
    data: {
      name: string;
      data: number[];
    }[];
  }[];
}

export interface IssueGraphWidgetProps {
  data?: {
    name: string;
    data: {
      name: string;
      data: number[];
    }[];
    time: dayjs.Dayjs[] | string[];
  };
  icon: string;
  color?: string;
}
