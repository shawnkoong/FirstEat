import React, { useState } from "react";
import { Container, Paper, Box, TextField, Button } from "@mui/material";
import { registerVendor } from "../api/server";

export const CreateAccountPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [passwordMatch, setPasswordMatch] = useState(false);

  useEffect(() => {
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  return (
    <Container>
      <Paper
        elevation={3}
        sx={{ padding: "50px 20px", width: 600, margin: "20px auto" }}
      >
        <h1>Create New Account</h1>
        <Box autoComplete="off" component="form">
          <TextField
            id="outlined-basic"
            label="Username"
            fullWidth
            variant="outlined"
            required
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            fullWidth
            variant="outlined"
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            fullWidth
            variant="outlined"
            required
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            fullWidth
            variant="outlined"
            required
            margin="normal"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            disabled={!passwordMatch || !password || !username}
            onClick={registerVendor({ username, password, email })}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
