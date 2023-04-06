import { gql } from '@apollo/client';

export const ANOMALY_LIST = gql`
  query {
    anomaly_data {
      donutChart {
        name
        data
        label
      }
      scatterChart {
        data {
          name
          data {
            x
            y
            id
          }
        }
      }
      lineGraph {
        name
        data {
          name
          data {
            x
            y
          }
        }
      }
      alertData {
        severity
        kind
        message
        timestamp
        score
        kibanaUrl
        id
      }
    }
  }
`;
