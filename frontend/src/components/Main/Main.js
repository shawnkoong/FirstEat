import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getRapidApiData } from "../../api/rapidapi";
import MapNavBar from "../NavBar/MapNavBar";
import List from "../List/List";
import Map from "../Map/Map";
import { getRestaurants } from "../../api/server";

const Main = () => {
  const [restaurantsRapid, setRestaurantsRapid] = useState([]);
  const [restuarantsServer, setRestaurantsServer] = useState([]);
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
      getRestaurants().then((data) => {
        setRestaurantsServer(data?.filter((restaurant) => restaurant.address));
      });
      getRapidApiData(bounds.sw, bounds.ne).then((data) => {
        //setting data and removing parts of the response that is not a restaurant
        setRestaurantsRapid(data?.filter((restaurant) => restaurant.address));
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
          <List
            restaurants={[...restuarantsServer, ...restaurantsRapid]}
            loading={loading}
            child={child}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            restaurants={[...restuarantsServer, ...restaurantsRapid]}
            setChild={setChild}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
