import React from 'react';
import{Container,AppBar,Typography,Grow,Grid} from '@mui/material';

import memories from './images/memories.JPG'
const App = () => {
  return(
    <Container maxwidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memories} alt="memories" height="60"/>
        
      </AppBar>
    </Container>
  );
}

export default App;