import { createAsyncThunk } from '@reduxjs/toolkit';
import MakeupAPI from 'services/MakeupAPI';

//get request products
export const getProductsList = createAsyncThunk(
  'products/searchProducts',
  async (params, thunkApi) => {
    try {
      return await MakeupAPI.search(params);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
