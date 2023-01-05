import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import {
  logOut,
  register,
  logIn,
  fetchCurrentUser,
  updateUser,
  getUser,
} from './auth-operations';
import { anyCases } from '../utils';

const initialState = {
  userData: null,
  user: {
    name: null,
    email: null,
    bloodType: null,
    height: null,
    age: null,
    curWeight: null,
    desWeight: null,
    dailyCalorie: null,
    notRecProducts: null,
  },
  token: null,
  isLoading: false,
  isUpdate: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const actions = [logOut, register, logIn, updateUser, getUser];

const pendingActions = isPending(...actions);
const fulfilledActions = isFulfilled(...actions);
const rejectedActions = isRejected(...actions);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, { payload }) {
      state.userData = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        // const { result, caloricityPerDay, dateFirstAdded } = payload.data;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        // state.bloodType = null
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        // state.bloodType = action.payload.data
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = initialState.user;
        state.userData = null;

        // state.bloodType = null
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isUpdate = false;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.data.user };
        state.isUpdate = true;
        state.userData = null;
      })
      .addCase(updateUser.rejected, state => {
        state.isUpdate = false;
      })
      .addMatcher(isAnyOf(fulfilledActions), anyCases.handleAnyFulfield)
      .addMatcher(isAnyOf(pendingActions), anyCases.handleAnyPending)
      .addMatcher(isAnyOf(rejectedActions), anyCases.handleAnyRejected),
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
