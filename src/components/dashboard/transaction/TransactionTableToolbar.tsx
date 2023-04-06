import React from 'react';
import Iconify from 'src/components/commons/Iconify';
import { setSearch, setFilterService } from '../../redux/transactionList';
import { Stack, InputAdornment, TextField, MenuItem, Button } from '@mui/material';
// components

// ----------------------------------------------------------------------

const INPUT_WIDTH = 160;
const TrnasectionPresenterOptions = ['전체', '당발', '타발'];
const TimeOption = ['5분', '10분', '20분', '30분'];
type Props = {
  time?: any;
  dispatch?: any;
  filterName?: string;
  filterService?: string;
  handleFilterName?: any;
};

const TransactionTableToolbar = ({
  time,
  dispatch,
  filterName,
  filterService,
  handleFilterName,
}: Props) => {
  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ py: 1, px: 2 }}>
      <TextField
        fullWidth
        select
        label="시간"
        value={time}
        // onChange={(event) => dispatch(setTime(event.target.value))}
        SelectProps={{
          MenuProps: {
            sx: { '& .MuiPaper-root': { maxHeight: 260 } },
          },
        }}
        sx={{
          maxWidth: { md: 160 },
          textTransform: 'capitalize',
        }}
      >
        {TimeOption &&
          TimeOption.map((option) => (
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
        select
        label="유형"
        value={filterService}
        onChange={(event) => dispatch(setFilterService(event.target.value))}
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
        {TrnasectionPresenterOptions.map((option) => (
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
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleFilterName();
          }
        }}
        //@ts-ignore
        onChange={(event) => dispatch(setSearch(event.target.value))}
        placeholder="GUID 검색"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon={'eva:search-fill'}
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          endAdornment: <Button onClick={handleFilterName}>검색</Button>,
        }}
      />
    </Stack>
  );
};

export default React.memo(TransactionTableToolbar);
