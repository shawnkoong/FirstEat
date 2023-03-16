import React, { useEffect, useCallback } from "react";
import { getRestaurants } from "../api/server";
import { Box, Card, CardMedia, Container, Grid } from "@mui/material";
import RestaurantDetails from "../components/RestaurantDetails/RestaurantDetails";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import RestaurantNameCard from "../components/RestaurantNameCard/RestaurantNameCard";
import Menu from "../components/Menu/Menu";
import ItemCardModal from "../components/ItemCard/ItemCardModal";
import { selectItem } from "../store/menuReducer";
import {
  resetCart,
  setRestaurantId,
  unsetRestaurantId,
} from "../store/cartReducer";

export const TestPage = () => {

  const dispatch = useDispatch();
  const handleUnload = useCallback(
    (e) => {
      dispatch(unsetRestaurantId());
      dispatch(resetCart());
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setRestaurantId(1));
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [handleUnload]);

  const menu = [
    {
      id: 1,
      name: "Burgers",
      items: [
        {
          id: 1,
          name: "All American Burger",
          price: 1550,
          imageURL:
            "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/iuycs3t4hhqhrcpgbs6k",
          description: "1/2 pound beef patty with bacon",
        },
        {
          id: 2,
          name: "Vegetarian Burger",
          price: 1325,
          imageURL:
            "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/hnkdgs6ngddtxalavisy",
          description: "Gluten free veg patty with avocado",
        },
      ],
    },
    {
      id: 3,
      name: "Sides",
      items: [
        {
          id: 3,
          name: "French Fries",
          price: 450,
          imageURL:
            "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/bi3fpbx095wza1dhaehh",
          description: "Extra crisp, served with House sauce",
        },
      ],
    },
    {
      id: 4,
      name: "Drinks",
      items: [
        {
          id: 4,
          name: "Lemonade",
          price: 450,
          imageURL:
            "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130,g_auto/umyblufptefc1gsjv9oh",
          description: "Lemonade made with fresh lemons",
        },
      ],
    },
  ];
  return (
    <>
      <NavBar />
      <Card>
        <CardMedia
          image="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_300,g_auto/zsiqlpzzlnn9oimcdmig"
          title="banner image"
          sx={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      </Card>
      <Container>
        <RestaurantNameCard />
        <br />
        <Menu menu={menu}/>
      </Container>
    </>
  );
};
