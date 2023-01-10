import { apiAxios, apiToken } from './api';
import axios from 'axios';
import { refreshToken } from 'redux/auth/auth-operations';

// const API_URL = `http://localhost:5001/api/`;
// import { apiToken } from './apiToken';
// const setup = store => {
//   // apiAxios.interceptors.request.use(config => {
//   //   config.headers.Authorization = `Bearer ${state.auth.token}`;
//   //   return config;
//   // });

// //   apiAxios.interceptors.response.use(
// //     config => {
// //       return config;
// //     },
// //     async error => {
// //       const originalRequest = error.config;
// //       console.log(originalRequest);
// //       if (
// //         error.response.status === 401 &&
// //         error.config &&
// //         !error.config._isRetry
// //       ) {
// //         originalRequest._isRetry = true;
// //         try {
//           const response = await apiAxios
//             .get(`auth/refresh`, {
//               withCredentials: true,
//             })
// //             .then(response => console.log(` setup ${response.data}`));
// //           // console.log(` setup ${response}`);
// //           // localStorage.setItem('token', response.data.token);
// //           return apiAxios.request(originalRequest);
// //         } catch (e) {
// //           console.log('НЕ АВТОРИЗОВАН');
// //         }
// //       }
// //       throw error;
// //     }
// //   );
// // };

// // export default setup;

const setup = store => {
  // apiAxios.interceptors.request.use(
  //   config => {
  //     const token = TokenService.getLocalAccessToken();
  //     if (token) {
  //       // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
  //       config.headers['x-access-token'] = token; // for Node.js Express back-end
  //     }
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );

  const { dispatch } = store;
  apiAxios.interceptors.response.use(
    config => {
      return config;
    },
    async error => {
      // const originalResponse = error.config;
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        // originalResponse._isRetry = true;
        originalRequest._isRetry = true;
        try {
          // const response = await axios.get(
          //   `http://localhost:5001/api/auth/refresh`,
          //   {
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //     withCredentials: true,
          //   }
          // );
          // const response = await axios.get(
          //   `http://localhost:5001/api/auth/refresh`,
          //   {
          //     withCredentials: true,
          //   }
          // );
          // const { token } = response.data;
          // console.log(token);
          // apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
          // apiToken.set(token)
          dispatch(refreshToken());
          return apiAxios.request(originalRequest);
        } catch (error) {
          console.log('unauthorized');
        }
      }
      // if (originalConfig.url !== 'auth/register' && err.response) {
      //   // Access Token was expired
      //   if (err.response.status === 401 && !originalConfig._retry) {
      //     originalConfig._retry = true;

      //     try {
      // const res = await apiAxios.get(`auth/refresh`, {
      //   withCredentials: true,
      // });
      //       // await dispatch(refreshToken());
      //       // console.log(`setup ${data}`);
      //       const { token } = res.data;
      //       console.log(token);
      //       apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
      //       dispatch(setRefreshToken(token));
      //       // dispatch(refreshToken(accessToken));
      //       // TokenService.updateLocalAccessToken(accessToken);

      //       return apiAxios(originalConfig);
      //     } catch (_error) {
      //       return Promise.reject(_error);
      //     }
      //   }
      // }
      throw error;
      // return Promise.reject(error);
    }
  );
};

export default setup;
