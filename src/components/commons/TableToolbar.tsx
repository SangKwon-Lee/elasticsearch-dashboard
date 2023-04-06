import { Stack, InputAdornment, TextField, MenuItem, Button } from '@mui/material';
// components
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const INPUT_WIDTH = 200;

type Props = {
  time?: any;
  isDate?: boolean;
  handleTime?: any;
  handleSearch?: any;
  isSearch?: boolean;
  isService?: boolean;
  filterName?: string;
  filterService?: string;
  optionsService?: string[];
  filterStartDate?: Date | null;
  filterEndDate?: Date | null;
  handleFilterName?: any;
  onFilterName?: (value: string) => void;
  onFilterStartDate?: (value: Date | null) => void;
  onFilterEndDate?: (value: Date | null) => void;
  onFilterService?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const TimeOption = ['5분', '10분', '20분', '30분'];

export default function TableToolbar({
  time,
  isDate,
  isSearch,
  isService,
  handleTime,
  filterName,
  handleSearch,
  onFilterName,
  filterEndDate,
  filterService,
  optionsService,
  filterStartDate,
  onFilterEndDate,
  onFilterService,
  onFilterStartDate,
  handleFilterName,
}: Props) {
  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ py: 1, px: 2 }}>
      {isDate && (
        <>
          <TextField
            fullWidth
            select
            label="시간"
            value={time}
            onChange={handleTime}
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

          {/* <DateTimePicker
            label="시작일"
            value={filterStartDate}
            inputFormat={'yyyy-MM-dd HH:mm'}
            onChange={onFilterStartDate}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                sx={{
                  maxWidth: { md: INPUT_WIDTH },
                }}
              />
            )}
          />
          <DateTimePicker
            label="종료일"
            value={filterEndDate}
            inputFormat={'yyyy-MM-dd HH:mm'}
            onChange={onFilterEndDate}
            renderInput={(params: any) => (
              <TextField
                {...params}
                fullWidth
                sx={{
                  maxWidth: { md: INPUT_WIDTH },
                }}
              />
            )}
          /> */}
        </>
      )}
      {isService && (
        <TextField
          fullWidth
          select
          label="유형"
          value={filterService}
          onChange={onFilterService}
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
          {optionsService &&
            optionsService.map((option) => (
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
      )}
      {isSearch && (
        <TextField
          fullWidth
          value={filterName}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleFilterName();
            }
          }}
          //@ts-ignore
          onChange={(event) => handleSearch(event.target.value)}
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
      )}
    </Stack>
  );
}
