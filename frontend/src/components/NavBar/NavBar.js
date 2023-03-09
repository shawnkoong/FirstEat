import React, { useState } from "react";
import { AppBar, Icon, Toolbar, Typography } from "@mui/material";
import {styled} from "@mui/materials/styles"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const NavBar = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const cartCount = useSelector(state => state.cart.totalCount);

    const IconWrapper = styled('div')(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
    }))

    return (
        <AppBar position='static' height='80px'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h5">
                    FirstEat
                </Typography>
                <IconWrapper>
                    <Badge badgeContent={cartCount} color="error">
                        <ShoppingBasketIcon onClick={() => setCartOpen(!cartOpen)}/>
                    </Badge>
                    <AccountCircleRoundedIcon />
                    {/* add more icons like
                        profile icon
                        ...
                    */}
                </IconWrapper>
            </Toolbar>
            {cartOpen && <Cart />}
        </AppBar>
    )
}