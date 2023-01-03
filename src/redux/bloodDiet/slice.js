import { createSlice } from '@reduxjs/toolkit';
import { getDiet } from './operations';

const initialState = {
  data: {},
  isLoading: false,
  error: false,
  showModal: false,
  // userDate: {
  //   height: '',
  //   age: '',
  //   curWeight: '',
  //   desWeight: '',
  //   bloodType: '',
  // },
};

const bloodDietSlice = createSlice({
  name: 'diet',
  initialState,
  reducers: {
    clearState(state) {
      state.data = {};
    },
    toggleModal(state, { payload }) {
      state.showModal = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getDiet.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getDiet.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getDiet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
      }),
});

export const bloodDietReducer = bloodDietSlice.reducer;
