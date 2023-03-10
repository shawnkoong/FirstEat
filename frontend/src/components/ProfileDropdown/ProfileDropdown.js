import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const ProfileDropdown = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "20px",
        top: "80px",
        zIndex: 999,
        padding: "20px",
        bgcolor: "white",
        boxShadow: "0px 0px 7px -5px rgba(0, 0, 0, 0.5)",
        "&:hover": { cursor: "pointer" },
      }}
    >
        <Grid container direction="column" alignContent="space-around">
          <Grid item>
            <Typography gutterBottom variant="subtitle1" color="primary">
              Profile
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1" color="primary">
              Orders
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1" color="primary">
              Favorites
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1" color="error">
              Logout
            </Typography>
          </Grid>
        </Grid>
    </Box>
  );
};

export default ProfileDropdown;
