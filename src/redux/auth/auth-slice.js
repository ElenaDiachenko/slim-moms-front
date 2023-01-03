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

const actions = [logOut, register, logIn, updateUser];

const pendingActions = isPending(...actions);
const fulfilledActions = isFulfilled(...actions);
const rejectedActions = isRejected(...actions);

const authSlice = createSlice({
  name: 'user',
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
        // state.bloodType = null
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
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
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
      })
      .addMatcher(isAnyOf(fulfilledActions), anyCases.handleAnyFulfield)
      .addMatcher(isAnyOf(pendingActions), anyCases.handleAnyPending)
      .addMatcher(isAnyOf(rejectedActions), anyCases.handleAnyRejected),
});

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.pending]: state => {
//       state.isLoading = true;
//     },
//     [register.fulfilled]: (state, action) => {
//       state.user = action.payload.data.user;
//       // state.bloodType = null
//       state.token = null;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//     },
//     [register.rejected]: (state, action) => {
//       state.isLoading = false;
//     },
//     [logIn.pending]: state => {
//       state.isLoading = true;
//     },
//     [logIn.fulfilled]: (state, action) => {
//       state.user = action.payload.data.user;
//       state.token = action.payload.data.token;
//       // state.bloodType = action.payload.data
//       state.isLoggedIn = true;
//       state.isLoading = false;
//     },
//     [logIn.rejected]: state => {
//       state.isLoading = false;
//     },

//     [logOut.pending]: state => {
//       state.isLoading = true;
//     },
//     [logOut.fulfilled](state, action) {
//       state.user = { name: null, email: null };
//       // state.bloodType = null
//       state.token = null;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//     },
//     [logOut.rejected]: (state, action) => {
//       state.isLoading = false;
//     },

//     [fetchCurrentUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [fetchCurrentUser.fulfilled](state, action) {
//       state.user = action.payload.data.user;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [fetchCurrentUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });
export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
