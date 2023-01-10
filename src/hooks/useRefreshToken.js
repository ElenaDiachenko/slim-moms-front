import { apiAxios } from 'servises/api';
import { useDispatch } from 'react-redux';
import { setRefreshToken } from 'redux/diary/diarySlice';

export const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const res = await apiAxios('auth/refresh');
    const { token } = res.data;
    dispatch(setRefreshToken(token));
    return token;
  };
  return refresh;
};
