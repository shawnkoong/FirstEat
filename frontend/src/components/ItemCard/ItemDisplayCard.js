import { Box, Typography } from "@mui/material";
import React from "react";

// for use in order details
const ItemDisplayCard = ({ item, quantity }) => {
  return (
    <Box
      display="flex"
      gap="20px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" gap="20px" alignItems="center">
        <img
          src={item.imageURL}
          alt={item.name}
          width="100px"
          height="100px"
          object-fit="cover"
        />
        <Typography variant="p">{quantity} x</Typography>
        <Typography variant="p">{item.name}</Typography>
      </Box>
      <Typography justifyContent="flex-end" variant="p" mr={2}>
        ${((quantity * item.price) / 100).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default ItemDisplayCard;
