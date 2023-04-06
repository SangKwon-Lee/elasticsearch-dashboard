import styled from '@emotion/styled';
import { handleReturnText } from 'src/utils/handleReturnText';
import { TableRow, TableCell, Typography } from '@mui/material';
import React from 'react';
import { NetworkTableRowType } from './Network.Type';
import { handleReturnNumber } from 'src/utils/handleReturnNumber';

const NetworkTableRow = ({ row }: NetworkTableRowType) => {
  const CustomTableCell = styled(TableCell)``;

  return (
    <TableRow hover>
      <CustomTableCell align="left">
        <Typography variant="subtitle2" noWrap>
          {handleReturnText(row?.serviceType)}
        </Typography>
      </CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.serviceNodeName)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.group)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.channelId)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.port)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnNumber(row?.sourceLinks)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnNumber(row?.destLinks)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnNumber(row?.numberOfCloseWait)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnNumber(row?.transmitQueue)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnNumber(row?.receiveQueue)}</CustomTableCell>
    </TableRow>
  );
};

export default React.memo(NetworkTableRow);
