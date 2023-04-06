import { gql } from '@apollo/client';

export const INTERFACE_LIST = gql`
  query {
    system_related {
      group
      port
      responseTime
      responseTimeStatus
      ingCount
      ingCountStatus
      transmitQueue
      transmitQueueStatus
      receiveQueue
      receiveQueueStatus
      closeWaitCount
      closeWaitCountStatus
      id
    }
  }
`;
