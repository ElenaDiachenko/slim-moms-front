import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from 'servises/instanceAxios';
import { createNotifySuccess } from 'helpers/createNotify';


export const addProduct = createAsyncThunk(
  'diary/addProduct',
  async (product, thunkAPI) => {
    try {
      const res = await $api.post(`diary`, product);
          createNotifySuccess('Product added successfully');
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getByDate = createAsyncThunk(
  'diary/getByDate',
  async (date, thunkAPI) => {
    try {
      const res = await $api.get(`diary?date=${date}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'diary/removeProduct',
  async (productId, thunkAPI) => {
    try {
      const res = await $api.delete(`diary/${productId}`);
          createNotifySuccess('Product removed successfully');
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
