import { gql } from '@apollo/client';

export const NETWORK_LIST = gql`
  query {
    network_summary {
      uniqueId
      serviceType
      group
      channelId
      serviceNodeName
      transmitQueue
      receiveQueue
      numberOfCloseWait
      links
      port
      sourceLinks
      destLinks
    }
  }
`;
