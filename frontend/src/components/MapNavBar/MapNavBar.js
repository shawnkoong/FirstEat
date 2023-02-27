import React, { useState }from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Box, Toolbar, Typography, InputBase } from "@mui/material";

const MapNavBar = ({ setCoordinates }) => {
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoCompPlace) => setAutocomplete(autoCompPlace);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });
    }

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'  }}>
                <Typography variant="h5">
                    FirstEat
                </Typography>
                <Box display="flex">
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <Box sx={{  position: 'relative', marginLeft: 0, width: '100%', borderRadius: '11px', bgcolor: 'white', mr: 3, ml: 0, width: '100%' }}>
                            <InputBase placeholder="Search..." />
                        </Box>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default MapNavBar;