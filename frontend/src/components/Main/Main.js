import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getData } from '../../api';
import NavBar from '../NavBar/NavBar';
import List from '../List/List';
import Map from "../Map/Map";

const Main = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [coordinates, setCoordinates] = useState({lat:33.4929357, lng:-117.0932424});
    const [bounds, setBounds] = useState({});

    //setting the initial state of coordinates to the user's current location on load.
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
    //         setCoordinates({ lat: latitude, lng: longitude });
    //     });
    //     console.log('lat: '+coordinates.lat);
    //     console.log('lng: '+coordinates.lng);
    // }, []);

    // useEffect(() => {
    //     getData(bounds.sw, bounds.ne)
    //         .then((data) => {
    //             console.log(data);
    //             setRestaurants(data);
    //         })
    // }, [coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <NavBar />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Main;