import React, { useCallback, useEffect } from "react";
import { Container, Card, CardMedia } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import RestaurantNameCard from "../components/RestaurantNameCard/RestaurantNameCard";
import Menu from "../components/Menu/Menu";
import { useDispatch } from "react-redux";
import {
  resetCart,
  setRestaurantId,
  unsetRestaurantId,
} from "../store/cartReducer";

const RestaurantPage = (restaurant) => {
  const dispatch = useDispatch();
  
  const handleUnload = useCallback(
    (e) => {
      dispatch(unsetRestaurantId());
      dispatch(resetCart());
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setRestaurantId(restaurant.id));
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [handleUnload]);

  return (
    <>
      <NavBar />
      <Card>
        <CardMedia
          image={restaurant.photo}
          title={restaurant.name}
          sx={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      </Card>
      <Container>
        <RestaurantNameCard />
        <Menu />
      </Container>
    </>
  );
};

export default RestaurantPage;
