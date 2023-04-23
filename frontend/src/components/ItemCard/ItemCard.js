import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { selectItem } from "../../store/menuReducer";

// similar to RestaurantDetails component to be used in the RestaurantPage
const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  item.id = item.id.toString();

  const handleClick = () => {
    dispatch(selectItem(item)); // deciding between item or item.id
  };

  return (
    <Card variant="outlined" onClick={handleClick}>
      <CardActionArea>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography
                varaint="h5"
                fontWeight="bold"
                fontSize={20}
                gutterBottom
              >
                {item.name}
              </Typography>
              <Typography variant="body" fontSize={16}>
                {item.description}
              </Typography>
              <br />
              <Typography variant="body" fontSize={16}>
                $ {(item.price / 100).toFixed(2)}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
