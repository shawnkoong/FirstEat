import axios from "axios";
import { store } from "../store/store";

const URL_PREFIX = "https://firsteat.up.railway.app/api";

const axiosInstance = axios.create({
  baseURL: URL_PREFIX,
});

// setting axios interceptor to include jwt token for every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
