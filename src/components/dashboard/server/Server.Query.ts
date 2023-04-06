import { gql } from '@apollo/client';

export const SERVER_LIST = gql`
  query {
    server_lists {
      name
      serviceType
      status
      cpuUsage
      memoryUsage
      diskUsage {
        usage
        fileSystem
      }
      networkIn {
        usage
        unit
      }
      networkOut {
        usage
        unit
      }
    }
  }
`;
