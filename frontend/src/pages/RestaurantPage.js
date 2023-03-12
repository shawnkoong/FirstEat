import React from "react";
import { Container, Card, CardMedia } from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import RestaurantNameCard from "../components/RestaurantNameCard/RestaurantNameCard";
import Menu from "../components/Menu/Menu";

const RestaurantPage = (restaurant) => {
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
        <Menu />
      </Container>
    </>
  );
};

export default RestaurantPage;
