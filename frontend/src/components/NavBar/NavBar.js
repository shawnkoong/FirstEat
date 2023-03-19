import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
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
  }));

  return (
    <AppBar position="fixed" height="80px">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="span" onClick={navigate("/home")}>FirstEat</Typography>
        <IconWrapper>
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
            sx={{ '&hover': {'cursor': 'pointer'}}}
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
