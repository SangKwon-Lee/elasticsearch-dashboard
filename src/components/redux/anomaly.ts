import dayjs from 'dayjs';
import { createSlice } from '@reduxjs/toolkit';

export interface AnomalyState {
  filterId: string[];
  filterAllIds: string[];
  filterString: string;
  filterStatus: string;
  filterStartDate: string;
  filterEndDate: string;
  filterTime: string;
}

const initialState: AnomalyState = {
  filterId: [],
  filterAllIds: [],
  filterString: '',
  filterStatus: '전체',
  filterStartDate: dayjs().add(9, 'hour').subtract(24, 'hour').toISOString().slice(0, -5),
  filterEndDate: dayjs().add(9, 'hour').toISOString().slice(0, -5),
  filterTime: '24시간',
};

export const alerts = createSlice({
  name: 'anomaly',
  initialState,
  reducers: {
    setFilterId: (state, action) => {
      state.filterId = action.payload;
      state.filterEndDate = dayjs().add(9, 'hour').toISOString().slice(0, -5);
    },
    setFilterAllIds: (state, action) => {
      state.filterAllIds = action.payload;
      state.filterEndDate = dayjs().add(9, 'hour').toISOString().slice(0, -5);
    },
    setFilterString: (state, action) => {
      state.filterString = action.payload;
      state.filterEndDate = dayjs().add(9, 'hour').toISOString().slice(0, -5);
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
      state.filterEndDate = dayjs().add(9, 'hour').toISOString().slice(0, -5);
    },
    setResetAnomaly: (state) => {
      Object.assign(state, initialState);
    },
    setFilterStartDate: (state, action) => {
      state.filterStartDate = action.payload;
      state.filterEndDate = dayjs().add(9, 'hour').toISOString().slice(0, -5);
    },
    setFilterTime: (state, action) => {
      state.filterAllIds = [];
      state.filterString = '';
      state.filterStatus = '전체';
      state.filterTime = action.payload;
      state.filterEndDate = dayjs().add(9, 'hour').toISOString().slice(0, -5);
    },
    setFilterOnlyTime: (state, action) => {
      state.filterTime = action.payload;
      state.filterEndDate = dayjs().add(9, 'hour').toISOString().slice(0, -5);
    },
  },
});

export const {
  setFilterId,
  setFilterTime,
  setFilterAllIds,
  setFilterStatus,
  setFilterString,
  setResetAnomaly,
  setFilterOnlyTime,
  setFilterStartDate,
} = alerts.actions;

export default alerts.reducer;
