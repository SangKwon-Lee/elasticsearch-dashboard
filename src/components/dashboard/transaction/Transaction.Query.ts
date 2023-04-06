import { gql } from '@apollo/client';

export const TRANSACTION_LIST = gql`
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

export const TRANSACTION_INFO_DETAIL = gql`
  query transaction_info_detail($gid: String!, $gte: String, $lte: String) {
    transaction_info_detail(gid: $gid, gte: $gte, lte: $lte) {
      nodes {
        id
        type
        data {
          label
          startTimestamp
          endTimestamp
          elapsedTime
          node
          userNo
          status
          interfaceId
          interfaceName
          interfacePattern
          bankCode
          bankName
          beforeSendChannelCode
          flowId
          sourceChannel
          sourceIpPort
          targetChannel
          targetIpPort
          mstSeq
          serviceCode
          serviceType
          firstSendChannelCode
          branchCode
          serviceName
          message
          errorMessage
          secondLabel
          details {
            timestamp
            step
            status
          }
        }
        position {
          x
          y
        }
        style {
          border
          backgroundColor
          width
          height
          FlexDirection
          display
          alignItems
          justifyContent
          borderRadius
        }
      }
      edges {
        id
        source
        target
        sourceHandle
        targetHandle
        animated
        style {
          stroke
        }
        label
        labelStyle {
          fill
          fontWeight
        }
        labelBgStyle {
          fill
        }
        markerEnd {
          type
        }
      }
      masters {
        gid
        mstSeq
        timestamp
        serviceType
        serviceCode
        interfaceName
        interfacePattern
        sourceChannel
        targetChannel
        serviceNode
        status
        bankCode
        bankName
        interfaceName
        errorMessage
      }
      details {
        gid
        mstSeq
        serviceType
        details {
          timestamp
          step
          status
        }
      }
    }
  }
`;

export const TRANSACTION_INFO_SUMMARY = gql`
  query transaction_info_summary($gid: String!, $gte: String, $lte: String) {
    transaction_info_summary(gid: $gid, gte: $gte, lte: $lte) {
      gid
      type
      startTimestamp
      endTimestamp
      elapsedTime
      status
    }
  }
`;
