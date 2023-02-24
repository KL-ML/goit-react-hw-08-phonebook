import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi, publicApi, token } from 'http/http'; 

export const authRegisterThunk = createAsyncThunk(
  'register',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await publicApi.post('/users/signup', values);
      token.set(data.token);
      return data;
    } catch (e) {
      console.log(e.message);
      return rejectWithValue(e.message);
      
    }
    
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
  async (_, { rejectWithValue }) => {

    try {
      await privateApi.post('/users/logout');
    token.remove();
    } catch(e) {
      return rejectWithValue(e.message);
    }
    
  });