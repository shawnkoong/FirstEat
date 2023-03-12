import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const Menu = (menu) => {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      {menu &&
        menu.map((category, i) => (
          <>
            <Typography variant="h5">{category.name}</Typography>
            <Grid container spacing={2}>
              {category.items.map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Paper elevation={3}>
                    <ItemCard item={item}/>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </>
        ))}
      Menu
    </Box>
  );
};

export default Menu;
