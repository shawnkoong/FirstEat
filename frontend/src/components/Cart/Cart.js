import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {

  const items = useSelector(state => state.cart.items);
  const subTotal = useSelector(state => state.cart.totalPrice);

  const handleCheckout = () => {
    // implement
  };

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
        '&:hover': {cursor: 'pointer'}
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
          <img
            src={item.imageURL}
            alt={item.name}
            width="100px"
            height="100px"
            object-fit="cover"
          />
          <Box sx={{ alignContent: 'space-between', justifyContent: 'space-between' }}>
            <Typography variant="h5" color={"black"}>
              {item.title}
            </Typography>
            <Typography variant="h6" color={"blue"}>
              {item.quantity} x ${(item.price / 100).toFixed(2)}
            </Typography>
          </Box>
          <ClearIcon sx={{ color: "red", cursor: "pointer" }} />
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 500,
          fontSize: "18px",
          marginBottom: "20px",
          color: "black",
        }}
      >
        <span>SUBTOTAL:</span>
        <span>${subTotal}</span>
      </Box>
      <Button
        onClick={handleCheckout}
        sx={{
          display: "flex",
          width: "250px",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          mb: "20px",
          bgcolor: "#0d47a1",
          '&hover': {
            backgroundColor: "#29b6f6",
          },
          p: "10px"
        }}
      >
        CHECKOUT
      </Button>
      <Box sx={{ color: "red", cursor: "pointer", fontSize: "12px"}}>
        <span>
          Empty Cart
        </span>
      </Box>
    </Box>
  );
};

export default Cart;
