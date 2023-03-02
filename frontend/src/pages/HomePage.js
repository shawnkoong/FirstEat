import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';


export const HomePage = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Paper elevation={3}>
                <Button variant="contained" size="large" onClick={navigate()}>Sign In as Customer</Button>
                <Button variant="contained" size="large" onClick={navigate()}>Sign In as Vendor</Button>
            </Paper>
        </Container>
    )
}
