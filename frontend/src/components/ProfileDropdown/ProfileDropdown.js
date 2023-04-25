import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userReducer";
import { logoutToken } from "../../store/authReducer";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutToken());
    dispatch(logout());
    navigate("/");
  };

  return (
    <Box
      sx={{
        position: "absolute",
        right: "20px",
        top: "80px",
        zIndex: 999,
        padding: "20px",
        bgcolor: "white",
        boxShadow: "0px 0px 7px -5px rgba(0, 0, 0, 0.5)",
        py: 1,
      }}
    >
      <Grid container direction="column" alignContent="space-around">
        {/* <Grid item onClick={() => navigate("/profile")}>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="primary"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            Profile
          </Typography>
        </Grid> */}
        <Grid item onClick={() => navigate("/orders")}>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="primary"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            Orders
          </Typography>
        </Grid>
        <Grid item onClick={() => navigate("/map")}>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="primary"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            Map
          </Typography>
        </Grid>
        {/* <Grid item>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="primary"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            Favorites
          </Typography>
        </Grid> */}
        <Grid item onClick={handleLogout}>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="error"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            Logout
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDropdown;
