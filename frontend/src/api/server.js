import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "../store/userReducer"
import { setToken } from "../store/authReducer";

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
        // need fix (could be just surrounding Authorization with double quotes?)
        const restaurants = await axios.get(`${urlPrefix}/restaurants`, {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
            }
        });
        return restaurants;
    } catch (error) {
        console.log(error);
    }
}