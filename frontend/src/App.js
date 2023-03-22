import React from "react";
import { Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";
import { CreateCustomerPage } from "./pages/CreateCustomerPage";
import { TestPage } from "./pages/TestPage";
import { PrivateRoutes } from "./util/PrivateRoutes";
import RestaurantPage from "./pages/RestaurantPage";
import { HomePage } from "./pages/HomePage";

import './App.css'
import CustomerMainPage from "./pages/CustomerMainPage";
import { UserOrdersPage } from "./pages/UserOrdersPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/register-customer" element={<CreateCustomerPage />} />
      <Route element={<PrivateRoutes />}>
        <Route exact path="/home" element={<CustomerMainPage />} />
        <Route exact path="/map" element={<MapPage />} />
        <Route exact path="/test" element={<TestPage />} />
        <Route exact path="/restaurant/:id" element={<RestaurantPage />} />
        <Route exact path="/orders" element={<UserOrdersPage />} />
      </Route>
    </Routes>
  );
};

export default App;
