import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Meme Creator
      </Typography>
      <Button color="inherit" href="/meme-creator">Create Meme</Button>
      <Button color="inherit" href="/about">About</Button>
    </Toolbar>
  </AppBar>
);

export default NavigationBar;