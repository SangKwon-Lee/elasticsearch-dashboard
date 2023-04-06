import { Button, MenuItem, Typography } from '@mui/material';
import Iconify from './Iconify';
import MenuPopover from './MenuPopover';

const SORT_BY_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'open', label: 'Open' },
  { value: 'priceDesc', label: 'Close' },
];

interface SortByOptionsProps {
  sort: string;
  handleClose: () => void;
  open: HTMLButtonElement | null;
  handleSortBy: (value: string) => void;
  handleOpen: (currentTarget: HTMLButtonElement) => void;
}

const SortByOptions = ({
  open,
  sort,
  handleOpen,
  handleClose,
  handleSortBy,
}: SortByOptionsProps) => (
  <>
    <Button
      color="inherit"
      disableRipple
      onClick={(event) => handleOpen(event.currentTarget)}
      endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
    >
      Sort By:&nbsp;
      <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
        {sort}
      </Typography>
    </Button>

    <MenuPopover
      anchorEl={open}
      open={Boolean(open)}
      onClose={handleClose}
      sx={{
        width: 'auto',
        '& .MuiMenuItem-root': { typography: 'body2', borderRadius: 0.75 },
      }}
    >
      {SORT_BY_OPTIONS.map((option) => (
        <MenuItem
          key={option.value}
          selected={option.value === sort}
          onClick={() => handleSortBy(option.value)}
        >
          {option.label}
        </MenuItem>
      ))}
    </MenuPopover>
  </>
);

export default SortByOptions;
