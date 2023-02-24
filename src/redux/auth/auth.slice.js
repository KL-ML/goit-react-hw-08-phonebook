import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'constants/status.constants';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getProfileThunk } from 'redux/profile/profile.thunk';

import { authInitState } from './auth.init-state';
import { authLoginThunk, authLogoutThunk } from './auth.thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder.addCase(authLoginThunk.pending, state => {
      state.status = STATUS.loading;
    }).addCase(authLoginThunk.fulfilled, (state, { payload }) => {
      state.status = STATUS.success;
      state.data = payload;
    }).addCase(authLoginThunk.rejected, state => {
      state.status = STATUS.error;
    }).addCase(getProfileThunk.rejected, () => authInitState)
      .addCase(authLogoutThunk.pending, state => {
        state.status = STATUS.loading;
      }).addCase(authLogoutThunk.fulfilled, state => {
        state.status = STATUS.success;
        state.data = null;
      }).addCase(authLogoutThunk.rejected, state => {
        state.status = STATUS.error;
      })
  },
});

export const { logoutAction } = authSlice.actions;

export const authReducer = persistReducer({
  key: 'auth',
  storage,
}, authSlice.reducer);