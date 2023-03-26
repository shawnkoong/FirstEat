import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserOrders } from "../api/server";
import NavBar from "../components/NavBar/NavBar";
import OrderCard from "../components/OrderCard/OrderCard";

export const UserOrdersPage = () => {
  const userId = useSelector((state) => state.user.currentUser.id);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserOrders(userId)
      .then((res) => setOrders(res))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <Box display="flex" width="100%" flexDirection="column" pt={4}>
          <Box width="100%">
            <Typography variant="h4" gutterBottom>
              Your past orders
            </Typography>
          </Box>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            <Grid container spacing={2}>
              {orders.map((order, i) => (
                <Grid item xs={12} key={i}>
                  <OrderCard order={order} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
};
