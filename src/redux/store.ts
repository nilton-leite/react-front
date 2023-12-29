import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './SigninSlice';
import { dashboardReducer } from './DashboardSlice';
 

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    dashboard: dashboardReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;