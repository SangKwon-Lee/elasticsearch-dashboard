import { TableRow, TableCell } from '@mui/material';
import { TransactionModalTableRowProps } from './Transaction.Type';

// ----------------------------------------------------------------------

export default function TransactionModalTableRow({ row, index }: TransactionModalTableRowProps) {
  return (
    <TableRow hover>
      <TableCell align="left">{index}</TableCell>
      <TableCell align="center">{row?.timestamp}</TableCell>
      <TableCell align="center">{row?.step}</TableCell>
      <TableCell align="center">{row?.status}</TableCell>
    </TableRow>
  );
}
