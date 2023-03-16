import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import ItemCardModal from "../ItemCard/ItemCardModal";

const Menu = ({ menu }) => {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      {menu &&
        menu.map((category, i) => (
          <Box marginY="15px" key={i}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {category.name}
            </Typography>
            <Grid container spacing={2}>
              {category.items.map((menuItem, j) => (
                <Grid item xs={12} sm={6} key={j}>
                  <Paper elevation={2}>
                    <ItemCard item={menuItem} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      <ItemCardModal />
    </Box>
  );
};

export default Menu;
