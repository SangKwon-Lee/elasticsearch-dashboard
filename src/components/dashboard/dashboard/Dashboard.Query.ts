import { gql } from '@apollo/client';
export const DASHBOARD_INFOS = gql`
  query transaction_lists($gte: String, $lte: String, $gid: String) {
    transaction_lists(gte: $gte, lte: $lte, gid: $gid) {
      gid
      type
      startTimestamp
      endTimestamp
      elapsedTime
      status
    }
  }
`;
