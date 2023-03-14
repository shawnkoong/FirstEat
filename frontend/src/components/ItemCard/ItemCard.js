import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ItemCardModal from "./ItemCardModal";

// similar to RestaurantDetails component to be used in the RestaurantPage
const ItemCard = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Card variant="outlined" onClick={handleOpen}>
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
          </CardContent>
        </Box>
        <ItemCardModal open={modalOpen} handleClose={handleClose}/>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { selectItem } from './menuSlice';

// function ItemCard({ item }) {
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch(selectItem(item.id));
//   };

//   return (
//     <div onClick={handleClick}>
//       <h2>{item.name}</h2>
//       <p>{item.description}</p>
//       <p>{item.price}</p>
//     </div>
//   );
// }

// export default ItemCard;
