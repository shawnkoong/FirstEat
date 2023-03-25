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
  setRestaurantName,
  unsetRestaurantName
} from "../store/cartReducer";
import { useLocation } from "react-router-dom";

const RestaurantPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const restaurant = location.state.restaurant;
  console.log({restaurant})

  /**
   * when a user leaves from this page, the cart resets. This prevents users from being bale to order
   *  from multiple restaurants, since this feature has not been implemented
   */
  const handleUnload = useCallback(
    (e) => {
      dispatch(unsetRestaurantId());
      dispatch(unsetRestaurantName());
      dispatch(resetCart());
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setRestaurantId(restaurant.id));
    dispatch(setRestaurantName(restaurant.name));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [handleUnload]);

  // could add scroll to top functionality later
  return (
    <>
      <NavBar />
      <Card>
        <CardMedia
          image={restaurant.imageURL}
          title={restaurant.name}
          sx={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      </Card>
      <Container>
        <RestaurantNameCard />
        <Menu menu={restaurant.menu}/>
      </Container>
    </>
  );
};

export default RestaurantPage;
