import styled from '@emotion/styled';
import { TableRow, TableCell, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';

export default function ServerDetailTableRow({ row }: any) {
  const CustomTableCell = styled(TableCell)``;
  const theme = useTheme();

  return (
    <>
      <TableRow hover sx={{ borderBottom: `1px solid ${theme.palette.grey[700]}` }}>
        <CustomTableCell
          align="left"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1">
            {dayjs(row?.datetime).format('YYYY-MM-DD HH:mm:ss.SSS')}
          </Typography>
        </CustomTableCell>
        <CustomTableCell align="left">
          <Typography variant="subtitle1">{row?.level} </Typography>
        </CustomTableCell>
        <CustomTableCell align="left">
          <Typography variant="subtitle1">{row?.group} </Typography>
        </CustomTableCell>
        <CustomTableCell align="left">
          <Typography variant="subtitle1">{row?.message} </Typography>
        </CustomTableCell>
      </TableRow>
    </>
  );
}
