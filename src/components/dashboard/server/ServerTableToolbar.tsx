import Iconify from '../../commons/Iconify';
import { ServerTableToolbarProps } from './Server.Type';
import { Stack, InputAdornment, TextField } from '@mui/material';

export default function ServerTableToolbar({ filterName, onFilterName }: ServerTableToolbarProps) {
  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ py: 1, px: 2 }}>
      <TextField
        fullWidth
        value={filterName}
        //@ts-ignore
        onChange={(event) => onFilterName(event.target.value)}
        placeholder="서버명 검색"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon={'eva:search-fill'}
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          // endAdornment: <Button onClick={handleSearch}>검색</Button>,
        }}
      />
    </Stack>
  );
}
