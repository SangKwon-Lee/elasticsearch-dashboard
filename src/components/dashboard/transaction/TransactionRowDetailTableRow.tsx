import { handleReturnText } from 'src/utils/handleReturnText';
import { TableRow, TableCell, Typography } from '@mui/material';
import { TransactionRowTableDetailRowProps } from './Transaction.Type';

export default function TransactionRowDetailTableRow({
  index,
  row,
  handleListDetailData,
}: TransactionRowTableDetailRowProps) {
  return (
    <TableRow hover onClick={() => handleListDetailData(row)}>
      <TableCell align="left">
        <Typography variant="subtitle2" noWrap>
          {index}
        </Typography>
      </TableCell>
      <TableCell align="center">{handleReturnText(row?.timestamp)}</TableCell>
      <TableCell align="center">{handleReturnText(row?.step)}</TableCell>
      <TableCell align="center">{handleReturnText(row?.status)}</TableCell>
    </TableRow>
  );
}
