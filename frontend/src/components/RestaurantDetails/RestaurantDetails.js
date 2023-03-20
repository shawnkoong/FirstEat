import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Chip,
  Rating,
  CardActionArea,
} from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";

const RestaurantDetails = ({ restaurant }) => {
  const navigate = useNavigate();
  // const [modalOpen, setModalOpen] = useState(false);

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const handleClick = () => {
    if (restaurant.menu) {
      navigate(`/restaurant/${restaurant.id}`, { state: { restaurant } });
    } else {
      // choose a better way to display information below
      alert(
        "The API used for this project does not provide a restaurant's menu information. Please visit the demo restaurant from the top of this list."
      );
    }
  };

  return (
    <>
      <Card elevation={5}>
        {/* replace test link with /restaurants/:id */}
        <CardActionArea onClick={handleClick}>
          <CardMedia
            style={{ height: 350 }}
            image={
              restaurant?.photo
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
            {restaurant.rating && (
              <Box display="flex" justifyContent="space-between">
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(restaurant.rating)}
                  precision={0.1}
                  readOnly
                />
                <Typography gutterBottom variant="subtitle1">
                  out of {restaurant.num_reviews} reviews
                </Typography>
              </Box>
            )}

            {/* Price information in $'s */}
            {restaurant.price_level && (
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {restaurant.price_level}
                </Typography>
              </Box>
            )}

            {/* Ranking information */}
            {restaurant.ranking && (
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {restaurant.ranking}
                </Typography>
              </Box>
            )}

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
          </CardContent>
        </CardActionArea>
        <CardActions>
          {restaurant.web_url && (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(restaurant.web_url, "_blank")}
            >
              Trip Advisor
            </Button>
          )}
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
      </Card>
    </>
  );
};

export default RestaurantDetails;
