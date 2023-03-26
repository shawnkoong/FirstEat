import React, { useCallback, useEffect, useState } from "react";
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
  unsetRestaurantName,
} from "../store/cartReducer";
import { useParams } from "react-router-dom";
import { getRestaurantById } from "../api/server";

const RestaurantPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantById(id)
      .then((res) => setRestaurant(res))
      .catch((error) => console.log(error));
  }, [id]);

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
    if (restaurant) {
      dispatch(setRestaurantId(restaurant.id));
      dispatch(setRestaurantName(restaurant.name));
    }
  }, [restaurant, dispatch]);

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
      {restaurant ? (
        <>
          <Card>
            <CardMedia
              image={restaurant.imageURL}
              title={restaurant.name}
              sx={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </Card>
          <Container>
            <RestaurantNameCard restaurant={restaurant}/>
            <Menu menu={restaurant.menu} />
          </Container>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default RestaurantPage;
