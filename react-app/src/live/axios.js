import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('jwt_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/refresh'
    ) {
      originalRequest._retry = true;
      try {
        const { data } = await instance.post('/refresh');
        localStorage.setItem('jwt_token', data.token);
        instance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        return instance(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem('jwt_token');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
