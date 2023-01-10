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
  refreshToken,
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
    setRefreshToken(state, { payload }) {
      state.token = payload;
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
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        // state.bloodType = action.payload.data
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        // state.user = initialState.user;
        // state.userData = null;
        // state.token = null;
        // state.isLoggedIn = false;
        // state.isLoading = false;
        state = initialState;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        // state.token = payload.data.token;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        // state.token = payload.data.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.data.user };
        state.userData = null;
      })

      .addMatcher(isAnyOf(fulfilledActions), anyCases.handleAnyFulfield)
      .addMatcher(isAnyOf(pendingActions), anyCases.handleAnyPending)
      .addMatcher(isAnyOf(rejectedActions), anyCases.handleAnyRejected),
});

export const { setUserData, setGoogleData, setRefreshToken } =
  authSlice.actions;
export default authSlice.reducer;
