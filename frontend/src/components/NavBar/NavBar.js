import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Box, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'  }}>
                <Typography variant="h5">
                    FirstEat
                </Typography>
                <Box display="flex">
                    <Typography variant="h6">
                        Search new city
                    </Typography>
                    {/* <Autocomplete> */}
                        <div sx={{  position: 'relative',
                                    marginLeft: 0,
                                    width: '100%' }}>
                            <SearchIcon sx={{ height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}/>
                            <InputBase placeholder="Search..." />
                            {/* <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/> */}
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;