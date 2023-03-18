import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { CustomerLogin } from "../components/CustomerLogin/CustomerLogin";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Box
          component="img"
          src="https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_auto,c_crop,g_north_west,h_1400,w_1500/v1656688653/homepage/DfxwD.png"
          alt="background"
          sx={{ height: "100vh", width: "100%", objectFit: "cover" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomerLogin />
        </Box>
      </Grid>
    </Grid>
  );
};
