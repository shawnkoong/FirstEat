import {
  Button,
  Link,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/server";

// same as VendorLoginPage for now, can make the frame into another component. The difference will be an extra line at the bottom to sign in as either demo customer or demo vendor.

export const CustomerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { username, password });
      navigate("/test");
    } catch (error) {
      console.log(error);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { username: "DemoCustomer", password: "password" });
      navigate("/test");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper elevation={3}>
      <Typography variant="h1">Sign In</Typography>
      <Paper elevation={6}>
        <form autoCapitalize="off">
          <Box display="flex" flexDirection="column">
            <TextField
              label="Username"
              margin="normal"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleLogin}
              disabled={isFetching}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              onClick={demoLogin}
              disabled={isFetching}
            >
              Sign In as Demo User
            </Button>
          </Box>
        </form>
        {error && (
          <Typography variant="subtitle1" color={"red"}>
            Invalid credentials
          </Typography>
        )}
        <Typography variant="subtitle1">Don't have an account?</Typography>
        <Link href="/register-customer">Register</Link>
      </Paper>
    </Paper>
  );
};
