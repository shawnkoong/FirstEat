import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Chip,
  Rating
} from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const RestaurantDetails = ({ restaurant }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <Card elevation={5}>
      <CardMedia
        style={{ height: 350 }}
        image={
          restaurant.photo
            ? restaurant.photo.images.large.url
            : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        title={restaurant.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {restaurant.name}
        </Typography>

        {/* Rating information */}
        <Box display="flex" justifyContent="space-between">
        <Rating name="read-only" size="small" value={Number(restaurant.rating)} precision={0.1} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {restaurant.num_reviews} reviews
          </Typography>
        </Box>

        {/* Price information in $'s */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {restaurant.price_level}
          </Typography>
        </Box>

        {/* Ranking information in $'s */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {restaurant.ranking}
          </Typography>
        </Box>

        {/* Cuisine information */}
        {restaurant?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            sx={{ margin: "5px 5px 5px 0" }}
          />
        ))}

        {/* Address of restaurant */}
        {restaurant?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            marginTop="10px"
            sx={style}
          >
            <LocationOn /> {restaurant.address}
          </Typography>
        )}

        {/* Phone number */}
        {restaurant?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            sx={style}
          >
            <PhoneIcon /> {restaurant.phone}
          </Typography>
        )}

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(restaurant.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          {restaurant.website && (
            <Button
                size="small"
                color="primary"
                onClick={() => window.open(restaurant.website, "_blank")}
            >
            Website
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default RestaurantDetails;
