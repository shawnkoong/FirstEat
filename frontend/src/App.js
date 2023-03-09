import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MapPage from './pages/MapPage';
import { CreateCustomerPage } from './pages/CreateCustomerPage';
import { CustomerLoginPage } from './pages/CustomerLoginPage';
import { TestPage } from './pages/TestPage';
import { PrivateRoutes } from './util/PrivateRoutes'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<CustomerLoginPage />} />
            <Route exact path="/register-customer" element={<CreateCustomerPage />} />
            <Route element={<PrivateRoutes />}>
                <Route exact path="/map" element={<MapPage />} />
                <Route exact path="/test" element={<TestPage />} />
            </Route>
        </Routes>
    );
}

export default App;