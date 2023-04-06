import React from 'react';
import styled from '@emotion/styled';
import useTextColor from 'src/hooks/useTextColor';
import { AnomalyRowTableProps } from './Anomaly.Type';
import { handleReturnText } from 'src/utils/handleReturnText';
import { TableRow, TableCell, Typography, useTheme, Avatar } from '@mui/material';

const AnomalyTableRow = ({ row }: AnomalyRowTableProps) => {
  const CustomTableCell = styled(TableCell)`
    color: ${useTextColor(row?.severity === '치명')};
  `;

  const theme = useTheme();
  return (
    <TableRow
      hover
      onClick={() => {
        // handleClose();
        window.open(row?.kibanaUrl, 'ModalPopUp', 'width=1000, height=1000');
      }}
      sx={{
        '&:hover': {
          backgroundColor:
            row?.severity === '치명' ? `${theme.palette.error.lighter} !important` : ` !important`,
        },
      }}
    >
      <CustomTableCell
        align="left"
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt={row?.severity}
          color={'info'}
          sx={{
            mr: 2,
            backgroundColor:
              row?.severity === '치명'
                ? theme.palette.error.main
                : row?.severity === '위험'
                ? theme.palette.warning.main
                : row?.severity === '경고'
                ? theme.palette.warning.light
                : theme.palette.primary.main,
            color: 'black',
          }}
        >
          {row?.severity.slice(0, 1)}
        </Avatar>
        <Typography variant="subtitle2" noWrap>
          {handleReturnText(row?.severity)}
        </Typography>
      </CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.kind)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.message)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.timestamp, true)}</CustomTableCell>
      <CustomTableCell align="center">{row?.score}</CustomTableCell>
    </TableRow>
  );
};

export default React.memo(AnomalyTableRow);
