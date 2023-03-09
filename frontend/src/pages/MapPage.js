import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { getRapidApiData } from "../api/rapidapi";
import { getRestaurants } from "../api/server";
import MapNavBar from "../components/NavBar/MapNavBar";
import List from "../components/List/List";
import Map from "../components/Map/Map";

const MapPage = () => {
    const [restaurantsRapid, setRestaurantsRapid] = useState([]);
  const [restaurantsServer, setRestaurantsServer] = useState([]);
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
    //   Promise.all([getRestaurants(), getRapidApiData()]).then((data) => {
    //     setRestaurants(data?.filter((restaurant) => restaurant.address));
    //     setLoading(false);
    //   });
        // getRestaurants().then((response) => {
        //     setRestaurantsServer(response.data);
        // }).then(getRapidApiData(bounds.sw, bounds.ne)).then((data) => {
        //     setRestaurantsRapid(data?.filter((restaurant) => restaurant.address));
        // }).then(setLoading(false));
        getRestaurants().then((response) => {
            console.log(response);
            setRestaurants(response.data);
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
