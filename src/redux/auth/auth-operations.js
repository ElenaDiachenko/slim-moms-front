import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiToken, apiAxios } from 'servises/api';
import { creatNotifyError } from 'helpers/createNotify';

const token = apiToken;
const API = apiAxios;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/register', credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      creatNotifyError(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await API.get('auth/logout');
    token.unset();
  } catch (error) {
    creatNotifyError(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/login', credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      creatNotifyError(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.patch(`users/update`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await API.get('users/current');
      console.log(data);
      return data;
    } catch (err) {
      creatNotifyError(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
