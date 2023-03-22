import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserOrders } from "../api/server";
import OrderCard from "../components/OrderCard/OrderCard";

export const UserOrdersPage = () => {

    const userId = useSelector(state => state.user.currentUser.id);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const response = getUserOrders(userId);
        // could add stuff to convert UTC to local time zone
        setOrders(response);
    }, []);

    return (
        <OrderCard />
    )
}