import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

// similar to RestaurantDetails component to be used in the RestaurantPage
const ItemCard = ({ item }) => {
  return (
    <Card variant="outlined">
      <CardActionArea>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <CardMedia
            component="img"
            sx={{ width: 200, height: 180 }}
            image={
              item.imageURL
                ? item.imageURL
                : "https://img.freepik.com/free-icon/fast-food_318-386969.jpg"
            }
            title={item.name}
            />
            <CardContent>
              <Typography varaint="h5" fontWeight="bold" fontSize={20} gutterBottom>{item.name}</Typography>
              <Typography variant="body" fontSize={16}>{item.description}</Typography>
            </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
