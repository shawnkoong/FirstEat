import React, { useState } from 'react';
import { Container, Paper, TextField, Button } from '@mui/material';
import { registerVendor } from '../api/server';

export const CreateAccountPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container>
            <Paper elevation={3} sx={{ padding:'50px 20px', width:600, margin:"20px auto" }}>
                <h1>
                    Create New Account
                </h1>
                <Paper elevation={5}>
                    <form className="NewAccountForm" autoComplete='off'>
                        <TextField id="outlined-basic" label="username" fullWidth variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <TextField id="outlined-basic" label="e-mail" fullWidth variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="password" fullWidth variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {/* should add another TextField to confirm and check password */}
                        <Button variant="contained" onClick={registerVendor({ username, password, email })}>
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Paper>
        </Container>
    )
}