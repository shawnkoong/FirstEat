import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const items = useSelector(state => state.cart.items);
}