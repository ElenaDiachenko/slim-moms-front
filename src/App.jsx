import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './components/SharedLayout';
// import Modal from './components/Modal';
// import Loader from 'components/Loader/Loader';

import PrivateRoute from 'routes/PrivatRoutes';
import PublicRoute from 'routes/PublicRoutes';
// import ErrorRoute from 'routes/ErrorRoutes';

import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles';
import { useAuth } from 'hooks/useAuth';
import {
  // fetchCurrentUser,
  // updateUser,
  // getUser,
  checkAuth,
} from 'redux/auth/auth-operations';
import Loader from 'components/Loader/Loader';
//Add lazy
import { userSelector } from 'redux/auth/auth-selectors';

const RegistrationPage = lazy(() => import('./pages/RegistrationPage/index'));
const Login = lazy(() => import('./pages/Login/index'));
const Logout = lazy(() => import('./pages/Logout/index'));
const Calculator = lazy(() => import('./pages/Calculator/index'));
const Diary = lazy(() => import('./pages/Diary/index'));
const MainPage = lazy(() => import('./pages/MainPage/index'));
const NotFound = lazy(() => import('./pages/NotFound/index'));
const ModalPage = lazy(() => import('./pages/ModalPage/index'));
const AddProduct = lazy(() => import('./pages/AddProduct/index'));
const Google = lazy(() => import('./pages/Google/index'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isUpdate, isLoggedIn } = useAuth();
  const userSavedData = useSelector(userSelector.selectUserSavedData);

  useEffect(() => {
    if (localStorage.getItem('token_moms')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  // useEffect(() => {
  //   if (!isLoggedIn) return;
  //   (async () => {
  //     if (!isUpdate && userSavedData) {
  //       await dispatch(updateUser(userSavedData));
  //     }
  //     await dispatch(getUser());
  //   })();
  // }, [dispatch, isUpdate, userSavedData, isLoggedIn]);

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <Global styles={GlobalStyles} />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <MainPage />
                </PublicRoute>
              }
            />
            <Route path="/modal" element={<ModalPage />} />
            {/* PRIVATE ROUTES */}
            <Route
              path="/logout"
              element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
              }
            />
            <Route
              path="/diary"
              element={
                <PrivateRoute>
                  <Diary />
                </PrivateRoute>
              }
            />
            <Route
              path="/google-redirect"
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <Google />
                </PublicRoute>
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute>
                  <AddProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/calculator"
              element={
                <PrivateRoute>
                  <Calculator />
                </PrivateRoute>
              }
            />

            {/* PUBLICK ROUTES */}
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/registration"
              element={
                <PublicRoute
                  //  redirectTo={userSavedData ? '/diary' : '/calculator'}
                  redirectTo="/diary"
                  restricted
                >
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
      <ToastContainer />
    </>
  );
};
