import { createAsyncThunk } from '@reduxjs/toolkit';
// import { apiAxios } from 'servises/api';
import $api from 'servises/instanceAxios';

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await $api.get('bloodproducts/all');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getProductByQuery = createAsyncThunk(
  'product/getProductByQuery',
  async (product, { rejectWithValue }) => {
    try {
      const res = await $api.get(`products/query?title=${product}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getDiet = createAsyncThunk(
  'product/getDiet',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await $api.post('products', credentials);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
