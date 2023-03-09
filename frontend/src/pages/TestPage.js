import React, { useEffect, useState } from 'react';
import { getRestaurants } from '../api/server';
import { Grid } from '@mui/material';
import RestaurantDetails from '../components/RestaurantDetails/RestaurantDetails';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const TestPage = () => {

    const [restaurants, setRestaurants] = useState([]);
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        try {
            getRestaurants().then((response) => {
                console.log(response?.data);
                setRestaurants(response?.data);
                console.log(token);
                console.log(axios)
            })
        } catch (error) {
            console.log(error);
            console.log(token);
        }
    }, [])

    return (
        <div>
            testing...
            <div>
                {restaurants?.map((restaurant, i) => (
                    <Grid item key={i} xs={12}>
                        <RestaurantDetails restaurant={restaurant} />
                    </Grid>
                ))}
            </div>
        </div>
    )
}