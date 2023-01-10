import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setGoogleData } from 'redux/auth/auth-slice';
import { checkAuth, updateUser } from 'redux/auth/auth-operations';
import { userSelector } from 'redux/auth/auth-selectors';

const Google = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const userSavedData = useSelector(userSelector.selectUserSavedData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!params) return;
    (async () => {
      await dispatch(setGoogleData(params));
      await dispatch(checkAuth());
      if (userSavedData) {
        await dispatch(updateUser(userSavedData));
      }
    })();
  }, [params, dispatch, userSavedData]);
};

export default Google;
