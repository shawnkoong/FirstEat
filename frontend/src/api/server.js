import axios from "axios";

// change for deployment
const urlPrefix = "http://localhost:8080/api";

export const login = async (user) => {
    try {
        if (user) {
            const response = await axios.post(`${urlPrefix}/auth/login`, user);
            //TODO - get JWT token and store it somehow (if using redux, add there??)
            console.log(response);
        }
    } catch (error) {
        console.log(error);
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
        const restaurants = await axios.get(`${urlPrefix}/restaurants`);
        return restaurants;
    } catch (error) {
        console.log(error);
    }
}