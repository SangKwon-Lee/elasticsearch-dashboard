import styled from '@emotion/styled';
import { TableRow, TableCell, useTheme, Avatar, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import Label from 'src/components/commons/Label';
import useTextColor from 'src/hooks/useTextColor';
import { ServerTableRowProsp } from './Server.Type';

export default function ServerTableRow({ row }: ServerTableRowProsp) {
  const theme = useTheme();
  const router = useNavigate();
  const CustomTableCell = styled(TableCell)`
    color: ${useTextColor(row?.status === '오류')};
  `;

  return (
    <TableRow
      hover
      sx={{
        '&:hover': {
          backgroundColor:
            row?.status === '오류' ? `${theme.palette.error.lighter} !important` : ` !important`,
        },
      }}
      onClick={() => router(`/server/${row?.name}`)}
    >
      <CustomTableCell
        align="left"
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt={row?.name}
          color={'info'}
          sx={{
            mr: 2,
            backgroundColor:
              row?.serviceInitial === 'M' ? theme.palette.primary.main : theme.palette.info.main,
            color: 'black',
          }}
        >
          {row?.serviceInitial}
        </Avatar>
        {row?.name}
      </CustomTableCell>
      <CustomTableCell align="center">
        {row?.status && (
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={
              (row?.status === '정상' && 'success') ||
              (row?.status === 'ING' && 'warning') ||
              (row?.status === '오류' && 'error') ||
              'success'
            }
          >
            {row?.status}
          </Label>
        )}
      </CustomTableCell>
      <CustomTableCell align="center">{Number(row?.cpuUsage).toFixed(2)}%</CustomTableCell>
      <CustomTableCell align="center">{Number(row?.memoryUsage).toFixed(2)}%</CustomTableCell>
      <CustomTableCell align="right">
        {Number(row?.diskUsage?.usage).toFixed(2)}%
        <Typography color={theme.palette.warning.main}>{row?.diskUsage?.fileSystem}</Typography>
      </CustomTableCell>
      <CustomTableCell align="right">
        {row?.networkIn?.usage}
        <Typography color={theme.palette.warning.main}>{row?.networkIn?.unit}</Typography>
      </CustomTableCell>
      <CustomTableCell align="right">
        {row?.networkOut?.usage}
        <Typography color={theme.palette.warning.main}>{row?.networkOut?.unit}</Typography>
      </CustomTableCell>
    </TableRow>
  );
}
