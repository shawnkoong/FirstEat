import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  return (
    <Paper elevation={2}>
      <Box display="flex" width="100%">
        <Box display="flex" flexDirection="column" width="70%">
          <Link to={`/restaurant/${order.restaurantId}`} style={{ textDecoration: "none", color: "blue" }}>
            <Typography variant="h6">{order.restaurantName}</Typography>
          </Link>
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
