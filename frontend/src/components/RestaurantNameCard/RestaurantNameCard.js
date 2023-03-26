import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import LocationOn from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const RestaurantNameCard = ( {restaurant} ) => {

    return (
        <Box marginTop="10px" sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {restaurant.name}
            </Typography>
            <Typography variant="subtitle1" color="GrayText">
                <LocationOn/> 32431 Magenta Ct
            </Typography>
            <Typography variant="subtitle1" color="GrayText">
                <PhoneIcon/> 951-375-7734
            </Typography>
            <Box display="flex" justifyContent="start">
                <Rating name="read-only" value={4.5} precision={0.1} readOnly sx={{paddingRight: 2}}/>
                <Typography variant="subtitle1" color="GrayText">
                    5 ratings
                </Typography>
            </Box>
        </Box>
    )
};

export default RestaurantNameCard;