import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsUpdate,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoading: useSelector(selectIsLoading),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    isUpdate: useSelector(selectIsUpdate),
  };
};
