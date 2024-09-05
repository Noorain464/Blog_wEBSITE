import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../components/Theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="static"
      sx={{
        background: mode === 'dark' ? 'linear-gradient(45deg, #2e2e2e, #4a4a4a)' : 'linear-gradient(45deg, #ff6f61, #ff9a8b)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        marginBottom: 4,
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <Toolbar sx={{ flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', flexWrap: 'wrap' }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: '#ffffff',
            textDecoration: 'none',
            mb: isMobile ? 2 : 0, // margin-bottom for mobile
            fontSize: isMobile ? '1.2rem' : '1.5rem',
          }}
          component={Link}
          to="/"
        >
          Blog Website
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 1, // reduced gap for mobile
            flexWrap: 'wrap', 
            justifyContent: isMobile ? 'center' : 'flex-start',
            mb: isMobile ? 2 : 0, // margin-bottom for mobile
          }}
        >
          {['Technology', 'Travel', 'Food', 'Lifestyle'].map((category, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={`/category/${category.toLowerCase()}`}
              sx={{
                color: '#ffffff',
                borderRadius: '20px',
                textTransform: 'capitalize',
                fontSize: isMobile ? '12px' : '14px', // responsive font size
                padding: isMobile ? '4px 8px' : '8px 20px', // responsive padding
                '&:hover': {
                  backgroundColor: mode === 'dark' ? '#555' : '#ffffff33',
                },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        <Button
          component={Link}
          to="/create-blog"
          sx={{
            marginLeft: isMobile ? 0 : 2,
            padding: isMobile ? '6px 12px' : '8px 20px', // responsive padding
            color: mode === 'dark' ? '#333' : '#ffffff',
            backgroundColor: mode === 'dark' ? '#ffeb3b' : '#ff4081',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: isMobile ? '12px' : '14px', // responsive font size
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            textTransform: 'uppercase',
            mb: isMobile ? 2 : 0, // margin-bottom for mobile
            width: isMobile ? '100%' : 'auto', // full width on mobile
          }}
        >
          Create Blog
        </Button>

        <IconButton
          color="inherit"
          onClick={toggleTheme}
          sx={{ 
            ml: isMobile ? 0 : 2, 
            borderRadius: '50%', 
            backgroundColor: mode === 'dark' ? '#555' : '#ffffff33', 
            padding: '8px' 
          }}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
