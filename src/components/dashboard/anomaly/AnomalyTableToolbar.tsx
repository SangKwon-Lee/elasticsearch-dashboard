import React from 'react';
import Iconify from 'src/components/commons/Iconify';
import { Stack, InputAdornment, TextField, MenuItem, Button } from '@mui/material';
// components

// ----------------------------------------------------------------------

const INPUT_WIDTH = 160;
type Props = {
  filterName?: string;
  filterType?: string;
  handleFilterName?: any;
  handleFilterType?: any;
  handleFilterId?: any;
  tableDataOption: string[];
};

const AnomalyTableToolbar = ({
  filterName,
  filterType,
  handleFilterName,
  handleFilterType,
  tableDataOption,
  handleFilterId,
}: Props) => {
  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ py: 2, px: 2 }}>
      <Button
        variant="contained"
        sx={{ minWidth: 100 }}
        onClick={() => {
          handleFilterId('');
        }}
      >
        리스트 초기화
      </Button>
      <TextField
        fullWidth
        select
        label="이상종류"
        value={filterType}
        onChange={handleFilterType}
        SelectProps={{
          MenuProps: {
            sx: { '& .MuiPaper-root': { maxHeight: 260 } },
          },
        }}
        sx={{
          maxWidth: { md: INPUT_WIDTH },
          textTransform: 'capitalize',
        }}
      >
        {tableDataOption.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              mx: 1,
              my: 0.5,
              borderRadius: 0.75,
              typography: 'body2',
              textTransform: 'capitalize',
            }}
          >
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        value={filterName}
        //@ts-ignore
        onChange={handleFilterName}
        placeholder="내용을 입력하세요"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon={'eva:search-fill'}
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          // endAdornment: <Button onClick={handleFilterName}>검색</Button>,
        }}
      />
    </Stack>
  );
};

export default React.memo(AnomalyTableToolbar);
