import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, token } from "http/http";
import { selectAuthToken } from "redux/auth/auth.selector";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getProfileThunk = createAsyncThunk(
  'profile',
  async (_, { getState, rejectWithValue }) => {
    try {
      const stateToken = selectAuthToken(getState()).token;
      if (!stateToken) {
        return rejectWithValue();
      }
      token.set(stateToken);
      const { data } = await privateApi.get('/users/current');
      return data;
    } catch (e) {
      Notify.failure(`${e.message}`);
      return rejectWithValue(e.message);
    }
  });