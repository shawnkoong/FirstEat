import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "../store/userReducer"
import { setToken } from "../store/authReducer";
import { useSelector } from "react-redux";
import { store } from "../store/store";

// change for deployment
const urlPrefix = "http://localhost:8080/api";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await axios.post(`${urlPrefix}/auth/login`, user);
        /**
         * response.data: {
         *      token:  jwet token
         *      user:   user object without password
         *  }
         */
        dispatch(loginSuccess(response.data.user));
        dispatch(setToken(response.data.token));
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const registerCustomer = async (dispatch, user) => {
    try {
        const response = await axios.post(`${urlPrefix}/auth/register-customer`, user);
        dispatch(loginSuccess(response.data.user));
        dispatch(setToken(response.data.token));
    } catch (error) {
        console.log(error);
    }
}

export const registerVendor = async (dispatch, user) => {
    try {
        const response = await axios.post(`${urlPrefix}/auth/register-vendor`, user);
        dispatch(loginSuccess(response.data.user));
        dispatch(setToken(response.data.token));    
    } catch (error) {
        console.log(error);
    }
}

export const getRestaurants = async () => {
    try {
        const restaurants = await axios.get(`${urlPrefix}/restaurants/`);
        return restaurants;
    } catch (error) {
        console.log(error);
    }
}