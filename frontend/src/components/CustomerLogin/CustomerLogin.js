import { Button, Link, Paper, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/server";

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

  const demoLoginCustomer = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { username: "DemoCustomer", password: "password" });
      navigate("/test");
    } catch (error) {
      console.log(error);
    }
  };

  const demoLoginVendor = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { username: "DemoCustomer", password: "password" });
      navigate("/test");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper elevation={3} sx={{ width: "35%" }}>
      <Paper elevation={5}>
        <Box sx={{ marginX: 3, paddingY: 2 }}>
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
                sx={{ marginTop: 1 }}
              >
                Sign In
              </Button>
              {error && (
                <Typography variant="subtitle1" color={"red"}>
                  Invalid credentials
                </Typography>
              )}
            </Box>
          </form>
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              Don't have an account?
            </Typography>
            <Link href="/register-customer">Register</Link>
          </Box>
          <Box display="flex" justifyContent="space-around" paddingTop={1}>
            <Button
              variant="contained"
              size="small"
              onClick={demoLoginCustomer}
              disabled={isFetching}
            >
              Sign In as Demo User
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={demoLoginVendor}
              disabled={isFetching}
            >
              Sign In as Demo Vendor
            </Button>
          </Box>
        </Box>
      </Paper>
    </Paper>
  );
};
