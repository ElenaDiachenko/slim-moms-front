export const selectIsLoading = state => state.auth.isLoading;

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsUpdate = state => state.auth.isUpdate;
const selectUserDailyCalorie = state => state.auth.dailyCalorie;
const selectUserNotRecProducts = state => state.auth.notRecProducts;
const selectUserSavedData = state => state.auth.userDate;


export const userSelector = {
  selectUserDailyCalorie,
  selectUserNotRecProducts,
  selectUserSavedData,
  selectUser,
};
