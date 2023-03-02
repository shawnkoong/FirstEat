import { Button, Container, Link, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/server';

// same as VendorLoginPage for now, can make the frame into another component. The difference will be an extra line at the bottom to sign in as either demo customer or demo vendor.

export const CustomerLoginPage = () => {

    // const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  

    return (
        <Container>
            <Paper elevation={3}>
                <Typography variant='h1'>
                    Sign In
                </Typography>
                <Paper elevation={6}>
                    <form autoCapitalize='off'>
                        <TextField label="Username" margin="normal" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <TextField label="Password" margin="normal" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button variant="contained" onClick={(e) => login({ username, password })}>
                            Sign In
                        </Button>
                    </form>
                    <Typography variant="subtitle1">
                        Don't have an account?
                    </Typography>
                    <Link href="">
                        Register
                    </Link>
                </Paper>
            </Paper>
        </Container>
    )
}