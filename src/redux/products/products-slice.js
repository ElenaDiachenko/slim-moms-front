import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import {
  getAllProducts,
  getProductByQuery,
  getDiet,
} from './products-operations';
import { anyCases } from '../utils';

const actions = [getAllProducts, getProductByQuery, getDiet];

const pendingActions = isPending(...actions);
const fulfilledActions = isFulfilled(...actions);
const rejectedActions = isRejected(...actions);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    productsByQuery: [],
    dataDiet: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    clearState(state) {
      state.dataDiet = {};
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getProductByQuery.fulfilled, (state, { payload }) => {
        state.productsByQuery = payload;
      })
      .addCase(getDiet.fulfilled, (state, { payload }) => {
        state.dataDiet = payload.result;
      })
      .addMatcher(isAnyOf(fulfilledActions), anyCases.handleAnyFulfield)
      .addMatcher(isAnyOf(pendingActions), anyCases.handleAnyPending)
      .addMatcher(isAnyOf(rejectedActions), anyCases.handleAnyRejected),

  // extraReducers: {
  //   [getAllProducts.pending]: handlePending,
  //   [getAllProducts.fulfilled]: handleProducts,
  //   [getAllProducts.rejected]: handleRejcted,
  //   [getProductByQuery.pending]: handlePending,
  //   [getProductByQuery.fulfilled]: handleProductsByQuery,
  //   [getProductByQuery.rejected]: handleRejcted,
  // },
});
export const { clearState } = productSlice.actions;
export default productSlice.reducer;
