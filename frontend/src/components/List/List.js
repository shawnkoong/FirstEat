import React from "react";
import { CircularProgress, Box, Grid, Typography } from "@mui/material";

import RestaurantDetails from "../RestaurantDetails/RestaurantDetails";

const List = ({ restaurants, loading }) => {
  return (
    <Box sx={{ padding: "25px" }}>
      <Typography variant="h4" paddingBottom={3}>
        Restaurants around you
      </Typography>
      {loading ? (
        <Box
          sx={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <Grid container spacing={3} sx={{ height: "75vh", overflow: "auto" }}>
          {restaurants?.map((restaurant, i) => (
            <Grid item key={i} xs={12}>
              <RestaurantDetails restaurant={restaurant} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default List;
