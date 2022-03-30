import React from 'react';
import Navbar from './components/Layout/Navbar';
import Gallery from './pages/Gallery/Gallery';
import { Box } from '@material-ui/core';


const App = () => {
  return (
    <Box sx={{ display: 'grid', gridTemplateRows: '8rem auto', gridRowGap: '2rem', width: '94.4%', margin: 'auto' }}>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ gridRow: '2 / 3' }}>
        <Gallery />
      </Box>
    </Box>
  );
}

export default App;
