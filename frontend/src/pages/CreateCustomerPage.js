import React, { useEffect, useState } from "react";
import { Container, Paper, TextField, Button } from "@mui/material";
import { registerCustomer } from "../api/server";

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
        <Paper elevation={5}>
          <form className="NewAccountForm" autoComplete="off">
            <TextField
              id="outlined-basic"
              label="username"
              fullWidth
              variant="outlined"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="e-mail"
              fullWidth
              variant="outlined"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="password"
              fullWidth
              variant="outlined"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="confirmPassword"
              fullWidth
              variant="outlined"
              required
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              variant="contained"
              disabled={!passwordMatch || !password || !username}
              onClick={registerCustomer({ username, password, email })}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Paper>
    </Container>
  );
};
