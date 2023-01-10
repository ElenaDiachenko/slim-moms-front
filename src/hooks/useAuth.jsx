import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    currentToken: useSelector(selectToken),

    isLoading: useSelector(selectIsLoading),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
