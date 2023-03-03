import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
  const items = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Pineapple Pizza",
      description: "Pineapple Pizza",
      price: 20,
      quantity: 1
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Alfredo Pasta",
      description: "Alfredo Pasta",
      price: 17,
      quantity: 1
    },
  ];
  // const items = useSelector(state => state.cart.items)

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
      }}
    >
      <Typography variant="h3" sx={{ color: "black" }}>
        Items in your cart
      </Typography>
      {items?.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <img src={item.img} alt="" width="100px" height="120px" object-fit="cover"/>
          <Typography variant="h5" color={'black'}>
            {item.title}
          </Typography>
          <Typography variant="p" color={'black'}>
            {item.description.substring(0, 100)}
          </Typography>
          <Typography variant="h5" color={'blue'}>
            {item.quantity} x ${item.price}
          </Typography>
          <ClearIcon sx={{ color: "red", cursor: "pointer" }} />
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, fontSize: '18px', marginBottom: '20px', color: 'black'}}>
        <span>SUBTOTAL:</span>
        <span>$100</span>
      </Box>
    </Box>
  );
};

export default Cart;
