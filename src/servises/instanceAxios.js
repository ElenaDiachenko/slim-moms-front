import axios from 'axios';

// export const API_URL = `http://localhost:5001/api/`;
export const API_URL = `https://slimmoms-api.onrender.com/api/`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token_moms')}`;
  return config;
});

$api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token_moms', response.data.token);
        return $api.request(originalRequest);
      } catch (e) {
        // localStorage.removeItem('token_moms');
        // localStorage.removeItem('persist:auth');
      }
    }
    throw error;
  }
);

export default $api;
