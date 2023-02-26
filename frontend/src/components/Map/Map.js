import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from "@mui/material";


const Map = ({ setCoordiantes, setBounds, coordinates }) => {
  return (
    <Box sx={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA-Rj_RBYStRLplMaPM2-NHcOKP0XlkPyQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onClick={(e) => {
          setCoordiantes({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
        }}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;