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
  // fetchCurrentUser,
  updateUser,
  getUser,
  checkAuth,
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
  isLoggedIn: false,
  isRefreshing: false,
};

const actions = [logOut, register, logIn, updateUser, getUser, checkAuth];

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
    setGoogleData(state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = initialState.user;
        state.userData = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
      })
      .addCase(checkAuth.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(checkAuth.rejected, state => {
        state.isRefreshing = false;
      })
      // .addCase(fetchCurrentUser.pending, state => {
      //   state.isRefreshing = true;
      // })
      // .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
      //   state.user = payload.data.user;
      //   state.isLoggedIn = true;
      //   state.isRefreshing = false;
      // })
      // .addCase(fetchCurrentUser.rejected, state => {
      //   state.isRefreshing = false;
      // })
     
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.data.user };
        state.userData = null;
      })
           .addMatcher(isAnyOf(fulfilledActions), anyCases.handleAnyFulfield)
      .addMatcher(isAnyOf(pendingActions), anyCases.handleAnyPending)
      .addMatcher(isAnyOf(rejectedActions), anyCases.handleAnyRejected),
});

export const { setUserData, setGoogleData } = authSlice.actions;
export default authSlice.reducer;
