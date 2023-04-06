import styled from '@emotion/styled';
import useTextColor from 'src/hooks/useTextColor';
import { handleReturnText } from 'src/utils/handleReturnText';
import { TransactionDetailTableRowProps } from './Transaction.Type';
import { TableRow, TableCell, Typography, useTheme } from '@mui/material';

export default function TransactionDetailTableRow({
  row,
  index,
  handleListDetailData,
}: TransactionDetailTableRowProps) {
  const theme = useTheme();

  const CustomTableCell = styled(TableCell)`
    color: ${useTextColor(row?.errorMessage)};
  `;

  return (
    <TableRow
      hover
      onClick={() => handleListDetailData(row)}
      sx={{
        '&:hover': {
          backgroundColor: row?.errorMessage
            ? `${theme.palette.error.lighter} !important`
            : ` !important`,
        },
      }}
    >
      <CustomTableCell align="center">
        <Typography variant="subtitle2" noWrap>
          {index}
        </Typography>
      </CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.timestamp)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.serviceType)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.serviceCode)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.interfaceId)}</CustomTableCell>
      <CustomTableCell align="center" sx={{ maxWidth: 300, wordWrap: 'break-word' }}>
        {handleReturnText(row?.interfaceName)}
      </CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.interfacePattern)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.sourceChannel)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.targetChannel)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.serviceNode)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.status)}</CustomTableCell>
      <CustomTableCell align="center">{handleReturnText(row?.bankCode)}</CustomTableCell>
      <CustomTableCell align="center" sx={{ maxWidth: 200, wordWrap: 'break-word' }}>
        {handleReturnText(row?.errorMessage)}
      </CustomTableCell>
    </TableRow>
  );
}
