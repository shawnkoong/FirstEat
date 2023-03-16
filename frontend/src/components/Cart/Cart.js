import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { removeItem, resetCart } from "../../store/cartReducer";
import { checkout } from "../../api/server";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) => state.cart.totalPrice);
  const subTotalString = useSelector((state) => state.cart.totalPriceString);
  const restaurantId = useSelector((state) => state.cart.restaurantId);
  const userId = useSelector((state) => state.user.currentUser.id);
  const dispatch = useDispatch();

  const getItemsFromCart = () => {
    return items.map((item) => {
      const { id, ...rest } = item;
      return {id};
    });
  };

  // not sure if there is a way to simultaneously assign both the itemCopy and quantity
  const getQuantityFromCart = () => {
    return items.map((item) => {
      const { quantity, ...itemCopy } = item;
      return quantity;
    });
  };

  const handleCheckout = () => {
    const order = {
      totalPrice: subTotal * 100, // totalPrice is stored as int where 1 is 1 cent. subject to change to BigDecimal
      restaurant: {
        id: restaurantId,
      },
      user: {
        id: userId,
      },
      itemsOrdered: getItemsFromCart(), // list of items ordered. quantity should be removed and added to quantityOrdered
      quantityOrdered: getQuantityFromCart(),
    };
    console.log(order);
    checkout(dispatch, order);
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
        "&:hover": { cursor: "pointer" },
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
            justifyContent: "flex-start",
            gap: "20px",
            height: "125px",
          }}
        >
          <img
            src={item.imageURL}
            alt={item.name}
            width="100px"
            height="100px"
            object-fit="cover"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "75%",
            }}
          >
            <Typography variant="h6" color={"black"} gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="subtitle1" color={"blue"}>
              {item.quantity} x ${(item.price / 100).toFixed(2)}
            </Typography>
          </Box>
          <IconButton
            aria-label="remove"
            onClick={() => dispatch(removeItem(item))}
            sx={{ ml: "auto" }}
          >
            <ClearIcon sx={{ color: "red", cursor: "pointer" }} />
          </IconButton>
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
        <span>${subTotalString}</span>
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
          "&hover": {
            backgroundColor: "#29b6f6",
          },
          p: "10px",
        }}
      >
        CHECKOUT
      </Button>
      <Box sx={{ color: "red", cursor: "pointer", fontSize: "12px" }}>
        <span onClick={() => dispatch(resetCart())}>Empty Cart</span>
      </Box>
    </Box>
  );
};

export default Cart;
