import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './SigninSlice';
// import { usersListReducer } from './SigninSlice'
 

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    // userList: usersListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;