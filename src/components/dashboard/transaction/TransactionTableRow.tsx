import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import Label from 'src/components/commons/Label';
import useTextColor from 'src/hooks/useTextColor';
import { TransactionTableRowProps } from './Transaction.Type';
import { handleReturnText } from 'src/utils/handleReturnText';
import { TableRow, TableCell, Typography, Link, useTheme } from '@mui/material';

const TransactionTableRow = ({ row }: TransactionTableRowProps) => {
  const router = useNavigate();
  const theme = useTheme();
  const CustomTableCell = styled(TableCell)`
    color: ${useTextColor(row?.status === 'ERROR')};
  `;

  return (
    <TableRow
      hover
      sx={{
        '&:hover': {
          backgroundColor:
            row?.status === 'ERROR' ? `${theme.palette.error.lighter} !important` : ` !important`,
        },
      }}
    >
      <CustomTableCell align="left">
        <Link
          noWrap
          variant="subtitle2"
          onClick={() => {
            router(`/transaction/${row?.gid}`);
          }}
          sx={{
            color: 'text.primary',
            cursor: 'pointer',
            textAlign: 'start',
          }}
        >
          <Typography
            variant="subtitle2"
            noWrap
            color={row?.status === 'ERROR' ? theme.palette.error.main : 'primary'}
          >
            {row?.gid}
          </Typography>
        </Link>
      </CustomTableCell>
      <CustomTableCell align="center">
        {row?.status && (
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={
              (row?.status === 'OK' && 'success') ||
              (row?.status === 'ING' && 'warning') ||
              (row?.status === 'ERROR' && 'error') ||
              'success'
            }
          >
            {row?.status === 'OK' ? '정상' : row?.status === 'ING' ? '진행' : '오류'}
          </Label>
        )}
      </CustomTableCell>
      <CustomTableCell align="center">
        {row?.type && (
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={
              (row?.type === '당발' && 'info') || (row?.type === '타발' && 'default') || 'success'
            }
          >
            {row?.type}
          </Label>
        )}
      </CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.startTimestamp)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.endTimestamp)}</CustomTableCell>
      <CustomTableCell align="center">
        {handleReturnText(Number(row?.elapsedTime) / 1000)}
      </CustomTableCell>
    </TableRow>
  );
};

export default React.memo(TransactionTableRow);
