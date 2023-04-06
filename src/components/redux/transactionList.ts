import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface TransactionListState {
  search: string;
  filterService: string;
  filterStatus: string;
}

const initialState: TransactionListState = {
  search: '',
  filterService: '전체',
  filterStatus: '전체',
};

export const transactionList = createSlice({
  name: 'transactionList',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilterService: (state, action: PayloadAction<string>) => {
      state.filterService = action.payload;
    },
    setFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
    setResetTransaction: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setSearch, setFilterService, setFilterStatus, setResetTransaction } =
  transactionList.actions;

export default transactionList.reducer;
