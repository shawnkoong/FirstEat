import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "../store/userReducer";
import { setToken } from "../store/authReducer";
import axiosInstance from "./axiosInstance";
import { resetCart } from "../store/cartReducer";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axiosInstance.post(`/auth/login`, user);
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
};

export const registerCustomer = async (dispatch, user) => {
  try {
    const response = await axiosInstance.post(`/auth/register-customer`, user);
    dispatch(loginSuccess(response.data.user));
    dispatch(setToken(response.data.token));
  } catch (error) {
    console.log(error);
  }
};

export const registerVendor = async (dispatch, user) => {
  try {
    const response = await axiosInstance.post(`/auth/register-vendor`, user);
    dispatch(loginSuccess(response.data.user));
    dispatch(setToken(response.data.token));
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurants = async () => {
  try {
    const response = await axiosInstance.get(`/restaurants`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkout = async (dispatch, order) => {
  try {
    await axiosInstance.post(`/orders`, order)
    // clearing the cart after checking out
    dispatch(resetCart());
  } catch (error) {
    console.log(error);
  }
};
