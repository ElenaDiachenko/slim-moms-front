import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from 'servises/instanceAxios';
import { API_URL } from 'servises/instanceAxios';
import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await $api.post('auth/register', credentials);
      localStorage.setItem('token_moms', data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  let state = thunkAPI.getState();
  console.log(state);
  try {
    await $api.get('auth/logout');
    localStorage.removeItem('token_moms');
    localStorage.removeItem('persist:auth');

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await $api.post('auth/login', credentials);
      localStorage.setItem('token_moms', data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await $api.patch(`users/update`, credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${API_URL}auth/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token_moms', data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
