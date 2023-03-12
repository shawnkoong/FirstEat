import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { getRapidApiData } from "../api/rapidapi";
import { getRestaurants } from "../api/server";
import MapNavBar from "../components/NavBar/MapNavBar";
import List from "../components/List/List";
import Map from "../components/Map/Map";

const MapPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds.sw) {
      setLoading(true);
      Promise.all([
        getRestaurants(),
        getRapidApiData(bounds.sw, bounds.ne),
      ]).then((data) => {
        const restaurants = [...data[0], ...data[1]];
        setRestaurants(restaurants);
        setLoading(false);
      });
    }
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <MapNavBar setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List restaurants={restaurants} loading={loading} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            restaurants={restaurants}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MapPage;
