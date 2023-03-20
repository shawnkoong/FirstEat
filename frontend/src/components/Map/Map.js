import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography, useMediaQuery, Paper, Rating } from "@mui/material";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  restaurants,
}) => {
  const media = useMediaQuery("(min-width:600px)");
  const filtered = restaurants.filter((restaurant) => restaurant.latitude);

  return (
    <Box sx={{ height: "85vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
        }}
      >
        {restaurants &&
          filtered.map((restaurant, i) => (
            <Box
              lat={Number(restaurant.latitude)}
              lng={Number(restaurant.longitude)}
              key={i}
              sx={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                zIndex: 1,
                "&:hover": { zIndex: 2 },
              }}
            >
              {!media ? (
                <LocationOnIcon color="primary" fontSize="large" />
              ) : (
                <Paper
                  elevation={3}
                  sx={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100px",
                  }}
                >
                  <Typography variant="subtitle2" gutterBottom>
                    {" "}
                    {restaurant.name}{" "}
                  </Typography>
                  <img
                    src={
                      restaurant.photo
                        ? restaurant.photo.images.large.url
                        : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    }
                    alt={"restaurant"}
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(restaurant.rating)}
                    precision={0.1}
                    readOnly
                  />
                </Paper>
              )}
            </Box>
          ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
