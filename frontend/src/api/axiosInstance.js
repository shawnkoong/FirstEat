import axios from "axios";
import { store } from "../store/store";

// // change for deployment
const URL_PREFIX = "https://firsteat.up.railway.app/api";

const axiosInstance = axios.create({
  baseURL: URL_PREFIX,
});

// setting axios interceptor to include jwt token for every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token; // tried using useSelector but get invalid hook call
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
