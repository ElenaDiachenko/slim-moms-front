export const selectIsLoading = state => state.auth.isLoading;

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsUpdate = state => state.auth.isUpdate;
const selectUserDailyCalorie = state => state.auth.user.dailyCalorie;
const selectUserNotRecProducts = state => state.auth.user.notRecProducts;
const selectUserSavedData = state => state.auth.userData;

export const userSelector = {
  selectUserDailyCalorie,
  selectUserNotRecProducts,
  selectUserSavedData,
  selectUser,
};
