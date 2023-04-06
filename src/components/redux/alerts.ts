import { createSlice } from '@reduxjs/toolkit';

export interface AlertsState {
  alertsList: {
    uniqueId: string;
    alertMessage: string;
    message: string;
    timestamp: string;
    alertIds: string[];
    maxSeverity: string;
    maxAnomalyScoreMessage: string;
  }[];
  readIds: string[];
}

const initialState: AlertsState = {
  alertsList: [],
  readIds: [],
};

export const alerts = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlertList: (state, action) => {
      if (action.payload.length === 0) {
        state.alertsList = [];
      } else {
        state.alertsList = [action.payload, ...state.alertsList];
      }
    },
    setReadIds: (state, action) => {
      state.readIds = action.payload;
    },
  },
});

export const { setReadIds, setAlertList } = alerts.actions;

export default alerts.reducer;
