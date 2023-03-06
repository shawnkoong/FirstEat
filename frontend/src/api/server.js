import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "../store/userReducer"

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
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const registerCustomer = async (user) => {
    try {
        if (user) {
            const response = await axios.post(`${urlPrefix}/auth/register-customer`, user);
        }
    } catch (error) {
        console.log(error);
    }
}

export const registerVendor = async (user) => {
    try {
        if (user) {
            const response = await axios.post(`${urlPrefix}/auth/register-vendor`, user);
        }        
    } catch (error) {
        console.log(error);
    }
}

export const getRestaurants = async () => {
    try {
        // add jwt info in the header
        const restaurants = await axios.get(`${urlPrefix}/restaurants`);
        return restaurants;
    } catch (error) {
        console.log(error);
    }
}