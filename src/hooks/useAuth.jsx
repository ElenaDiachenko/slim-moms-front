import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsUpdate,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    token: useSelector(selectToken),
    isLoading: useSelector(selectIsLoading),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    isUpdate: useSelector(selectIsUpdate),
  };
};
