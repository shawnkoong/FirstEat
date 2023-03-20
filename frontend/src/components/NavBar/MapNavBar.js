import React, { useState } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Badge } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const LIBRARIES = ["geometry", "drawing", "places"];

const SearchWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "25px",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const MapNavBar = ({ setCoordinates }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const onLoad = (autoCompPlace) => setAutocomplete(autoCompPlace);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <AppBar position="static" height="80px">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">FirstEat</Typography>
        <SearchWrapper>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
              libraries={LIBRARIES}
            >
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <StyledInputBase placeholder="Search..." />
              </Autocomplete>
            </LoadScript>
          </Search>

            <AccountCircleRoundedIcon onClick={() => setProfileOpen(!profileOpen)} />

        </SearchWrapper>
      </Toolbar>
      {profileOpen && <ProfileDropdown />}
    </AppBar>
  );
};

export default MapNavBar;
