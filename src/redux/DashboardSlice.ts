import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getAll } from '../services/dashboard';

export interface IDashboard {
  isProcessingRequest: boolean;
  data: {
    id: number | null,
    date: string,
    name: string,
    shipTo: string,
    paymentMethod: string,
    amount: string
}[]
}

const initialState: IDashboard = { isProcessingRequest: false, data: [{id: null, date: '', name: '', shipTo: '', paymentMethod: '', amount: ''}] };
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
        data: action.payload.data
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});
export const getData = () => async (dispatch: (arg0: { payload: any; type: "dashboard/success" | "dashboard/error"; }) => void) => {

  try {
    const dashData = await getAll()
    dispatch(success(dashData.data));
    
  } catch (err: any) {
    dispatch(error(err));
  }
};
export const { start, success, error } = dashboardSlice.actions;
export const selectDashboard = (state: RootState) => state.dashboard;
export const dashboardReducer = dashboardSlice.reducer;