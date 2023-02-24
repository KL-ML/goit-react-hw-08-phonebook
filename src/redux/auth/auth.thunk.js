import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi, publicApi, token } from 'http/http'; 

export const authRegisterThunk = createAsyncThunk(
  'register',
  async (values) => {
    const { data } = await publicApi.post('/users/signup', values);
    token.set(data.token);
    return data;
  });

export const authLoginThunk = createAsyncThunk(
  'login',
  async (values) => {
    const { data } = await publicApi.post('/users/login', values);
    token.set(data.token);
    return data;
  });

export const authLogoutThunk = createAsyncThunk(
  'logout',
  async (_, thunkAPI) => {
    try {
      await privateApi.post('/users/logout');
      token.remove();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });