import React, { useEffect, useState } from "react";
import { Button, CssBaseline, Grid } from "@mui/material";
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
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setRefresh(true);
  }, [bounds]);

  const clickRefresh = () => {
    setRefresh(false);
    sendRequest();
  }

  const sendRequest = () => {
    setLoading(true);
      Promise.all([
        getRestaurants(),
        getRapidApiData(bounds.sw, bounds.ne),
      ]).then((data) => {
        const list = [...data[0], ...data[1]];
        setRestaurants(list.filter((restaurant) => restaurant.address));
        setLoading(false);
      });
  }

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
          position="relative"
        >
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            restaurants={restaurants}
          />
          {refresh && (
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: 50,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              onClick={clickRefresh}
            >
              Search Here
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default MapPage;
