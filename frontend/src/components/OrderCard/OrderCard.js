import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OrderDetailModal from "./OrderDetailModal";
import { useDispatch } from "react-redux";
import { selectOrder } from "../../store/orderReducer";

const OrderCard = ({ order }) => {
  const dispatch = useDispatch();
  const timestamp = new Date(order.timestamp);
  const firstFourItems = order.itemsOrdered.slice(0, 4);
  const firstFourQuantity = order.quantityOrdered.slice(0, 4);
  const hiddenCount = order.itemsOrdered.length - firstFourItems.length;

  console.log(order);
  const localTime = `${
    timestamp.getMonth() + 1
  }/${timestamp.getDate()}/${timestamp.getFullYear()} ${
    timestamp.getHours() % 12 === 0 ? 12 : timestamp.getHours() % 12
  }:${timestamp.getMinutes()} ${timestamp.getHours() >= 12 ? "PM" : "AM"}`;

  const handleClick = () => {
    dispatch(selectOrder(order));
  };

  return (
    <>
      <Paper elevation={2}>
        <Box display="flex" width="100%">
          <Box display="flex" flexDirection="column" width="70%" mx={2}>
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Link
                  to={`/restaurant/${order.restaurantId}`}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  <Typography variant="h6">{order.restaurantName}</Typography>
                </Link>
                <Typography>${(order.totalPrice / 100).toFixed(2)}</Typography>
              </Box>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                Ordered on {localTime}
              </Typography>
            </Box>
            <Divider />
            <Box>
              {firstFourQuantity.map((quantity, i) => (
                <>
                  <Typography key={i}>
                    {quantity} x {firstFourItems[i].name}
                  </Typography>
                  <Divider />
                </>
              ))}
              {hiddenCount > 0 && (
                <div onClick={handleClick}>
                  <Typography
                    color="gray"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    + {hiddenCount} more
                  </Typography>
                </div>
              )}
            </Box>
          </Box>
          <Box display="flex" width="30%">
            <div>box 2</div>
          </Box>
        </Box>
      </Paper>
      <OrderDetailModal />
    </>
  );
};

export default OrderCard;
