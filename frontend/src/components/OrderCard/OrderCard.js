import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  const timestamp = new Date(order.timestamp);
  console.log(order);
  const localTime = `${
    timestamp.getMonth() + 1
  }/${timestamp.getDate()}/${timestamp.getFullYear()} ${
    timestamp.getHours() % 12 == 0 ? 12 : timestamp.getHours() % 12
  }:${timestamp.getMinutes()} ${timestamp.getHours() >= 12 ? "PM" : "AM"}`;
  return (
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
            {order.quantityOrdered.map((quantity, i) => (
              <>
                <Typography key={i}>
                  {quantity} x {order.itemsOrdered[i].name}
                </Typography>
                <Divider />
              </>
            ))}
          </Box>
        </Box>
        <Box display="flex" width="30%">
          <div>box 2</div>
        </Box>
      </Box>
    </Paper>
  );
};

// navigate(`/restaurant/${restaurant.id}`, { state: { restaurant } }); use something like this to navigate to restaurant page

export default OrderCard;
