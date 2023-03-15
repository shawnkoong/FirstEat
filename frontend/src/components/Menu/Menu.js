import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import ItemCardModal from "../ItemCard/ItemCardModal";

const Menu = () => {
  const menu = [
    {
      id: 1,
      name: "Burgers",
      items: [
        {
          id: 1,
          name: "All American Burger",
          price: 1550,
          imageURL: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/iuycs3t4hhqhrcpgbs6k",
          description: "1/2 pound beef patty with bacon",
        },
        {
          id: 2,
          name: "Vegetarian Burger",
          price: 1325,
          imageURL: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/hnkdgs6ngddtxalavisy",
          description: "Gluten free veg patty with avocado",
        },
      ],
    },
    {
      id: 2,
      name: "Sides",
      items: [
        {
          id: 3,
          name: "French Fries",
          price: 450,
          imageURL: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/bi3fpbx095wza1dhaehh",
          description: "Extra crisp, served with House sauce",
        },
      ],
    },
    {
      id: 3,
      name: "Drinks",
      items: [
        {
          id: 4,
          name: "Lemonade",
          price: 450,
          imageURL: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/umyblufptefc1gsjv9oh",
          description: "Lemonade made with fresh lemons",
        },
      ],
    },
  ];

  return (
    <Box display="flex" flexDirection="column" width="100%">
      {menu &&
        menu.map((category, i) => (
          <Box marginY="15px" key={i}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>{category.name}</Typography>
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