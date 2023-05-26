import { createSlice } from '@reduxjs/toolkit';
import { getProductsList } from './actions';

//products slice
const products = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    error: '',
    list: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      //request pending
      .addCase(getProductsList.pending, state => {
        state.loading = true;
        state.error = '';
      })
      //request fulfilled
      .addCase(getProductsList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      //error request
      .addCase(getProductsList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const productsReducer = products.reducer;
