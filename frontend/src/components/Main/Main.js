import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getRapidApiData } from "../../api/rapidapi";
import MapNavBar from "../MapNavBar/MapNavBar";
import List from "../List/List";
import Map from "../Map/Map";

const Main = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [loading, setLoading] = useState(false);
  const [child, setChild] = useState(null);

  //setting the initial state of coordinates to the user's current location on load.
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
        getRapidApiData(bounds.sw, bounds.ne).then((data) => {
            //setting data and removing parts of the response that is not a restaurant
            setRestaurants(data?.filter((restaurant) => restaurant.address));
            setLoading(false);
        });
    }
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <MapNavBar setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List restaurants={restaurants} loading={loading} child={child} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            restaurants={restaurants}
            setChild={setChild}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
