import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CustomerLogin } from "../components/CustomerLogin/CustomerLogin";

export const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_auto,c_crop,g_north_west,h_1400,w_1500/v1656688653/homepage/DfxwD.png"
          alt="background"
          sx={{ height: "100vh", width: "100%", objectFit: "cover" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box display="flex" flexDirection="column" justifyContent="end">
          <Box display="flex" justifyContent="center" mt={20}>
            <Typography variant="h2" fontWeight="5">
              Order the best, wherever you go
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: 10,
            }}
          >
            <CustomerLogin />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
