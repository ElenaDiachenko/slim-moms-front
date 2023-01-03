import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios } from 'servises/api';

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiAxios.get('bloodproducts/all');
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
      const res = await apiAxios.get(`products/query?title=${product}`);
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
