import { TextField, MenuItem, Box, Pagination } from '@mui/material';
import React from 'react';

const PAGE = [25, 50, 100];
const Dense = ['좁게', '넓게'];

interface TablePaginationProps {
  page: number;
  dense: string;
  isDense: boolean;
  perPage: number;
  pageCount: number;
  handlePerPage: (e: any) => void;
  onChangeDense: (event: any) => void;
  handlePage: (e: any, page: number) => void;
}

const TablePagination = ({
  page,
  dense,
  isDense,
  perPage,
  pageCount,
  handlePage,
  handlePerPage,
  onChangeDense,
}: TablePaginationProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', px: 2, pb: 1 }}>
      {isDense && (
        <TextField select label="행간격" value={dense} onChange={onChangeDense}>
          {Dense.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                typography: 'body2',
                textTransform: 'capitalize',
              }}
            >
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
      <Box sx={{ margin: 'auto' }}>
        <Pagination count={pageCount} onChange={handlePage} shape="rounded" page={page} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 1 }}>페이지 당 행수</Box>
        <TextField select label="수" value={perPage} onChange={handlePerPage}>
          {PAGE.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                typography: 'body2',
                textTransform: 'capitalize',
              }}
            >
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default React.memo(TablePagination);
