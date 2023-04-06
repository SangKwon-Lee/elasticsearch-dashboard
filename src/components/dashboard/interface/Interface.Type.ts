interface InterfaceList {
  group: string[];
  port: string;
  responseTime: number;
  responseTimeStatus: string;
  ingCount: number;
  ingCountStatus: string;
  transmitQueue: number;
  transmitQueueStatus: string;
  receiveQueue: number;
  receiveQueueStatus: string;
  closeWaitCount: number;
  closeWaitCountStatus: string;
  id: number;
}

export interface InterfacePresenterProps {
  interfaceList: InterfaceList[];
}
