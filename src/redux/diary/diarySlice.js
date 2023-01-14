import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import moment from 'moment';
import { getByDate, addProduct, removeProduct } from './diaryOperations';
import { anyCases } from '../utils';

const initialState = {
  selectedDate: moment(new Date()).format('YYYY-MM-DD'),
  caloricityPerDay: null,
  products: [],
  isLoading: false,
  error: null,
};
const actions = [getByDate, addProduct, removeProduct];

const pendingActions = isPending(...actions);
const fulfilledActions = isFulfilled(...actions);
const rejectedActions = isRejected(...actions);

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setDate(state, { payload }) {
      state.selectedDate = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getByDate.fulfilled, (state, { payload }) => {
        const { result, caloricityPerDay, dateFirstAdded } = payload.data;
        state.products = result.reverse();
        state.caloricityPerDay = caloricityPerDay;
        state.dateFirstAdded = dateFirstAdded;
      })
      .addCase(getByDate.rejected, (state, { payload }) => {
        if (payload === 'Request failed with status code 404') {
          state.products = [];
          state.caloricityPerDay = null;
        }
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        const { result } = payload.data;

        const idx = state.products.findIndex(item => item._id === result._id);
        if (idx !== -1) {
          state.products.splice(idx, 1, result);
        } else {
          state.products = [result, ...state.products];
        }

        state.caloricityPerDay =
          Number(state.caloricityPerDay) + Number(result.calories);
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        const idx = state.products.findIndex(item => item.id === payload.id);
        const [removedProduct] = state.products.splice(idx, 1);
        state.caloricityPerDay =
          Number(state.caloricityPerDay) - Number(removedProduct.calories);
      })
      .addMatcher(isAnyOf(fulfilledActions), anyCases.handleAnyFulfield)
      .addMatcher(isAnyOf(pendingActions), anyCases.handleAnyPending)
      .addMatcher(isAnyOf(rejectedActions), anyCases.handleAnyRejected),
});
export const { setDate } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
