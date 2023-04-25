import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Badge, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import GitHubIcon from "@mui/icons-material/GitHub";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.totalCount);
  const navigate = useNavigate();

  const IconWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "25px",
    cursor: "pointer",
  }));

  const handleGithubClick = () => {
    window.open("https://github.com/shawnkoong/FirstEat");
  };

  return (
    <AppBar position="sticky" height="80px">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box onClick={() => navigate("/map")} sx={{ cursor: "pointer" }}>
          <Typography variant="h5">FirstEat</Typography>
        </Box>
        <IconWrapper>
          <GitHubIcon onClick={handleGithubClick} />
          <Badge badgeContent={cartCount} color="error">
            <ShoppingBasketIcon
              onClick={() => {
                setCartOpen(!cartOpen);
                setProfileOpen(false);
              }}
            />
          </Badge>
          <AccountCircleRoundedIcon
            onClick={() => {
              setProfileOpen(!profileOpen);
              setCartOpen(false);
            }}
            sx={{ "&hover": { cursor: "pointer" } }}
          />
          {/* add more icons like
                        profile icon
                        ...
                    */}
        </IconWrapper>
      </Toolbar>
      {cartOpen && <Cart />}
      {profileOpen && <ProfileDropdown />}
    </AppBar>
  );
};

export default NavBar;
