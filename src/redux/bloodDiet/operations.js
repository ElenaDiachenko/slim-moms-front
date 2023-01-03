import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

//import { store } from '../store';
//import { apiAxios, apiToken } from '../../servises/api';

import { apiAxios } from '../../servises/api';

export const getDiet = createAsyncThunk(
  'diet/getDiet',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.post('products', credentials);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getDietUser = createAsyncThunk(
  'diet/calculateDietId',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.patch('users/update', credentials);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const clearState = createAction('data/clearState');
// export const toggleModal = createAction('showModal/toggleModal');
// export const changeUserDate = createAction('userDate/changeUserDate');
