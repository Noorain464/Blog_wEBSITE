import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../components/Theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];

  return (
    <AppBar
      position="static"
      sx={{
        background: mode === 'dark' ? 'linear-gradient(45deg, #333, #555)' : 'linear-gradient(45deg, #6a11cb, #2575fc)',
        boxShadow: 'none',
        marginBottom: 4,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: '#ffffff',
            textDecoration: 'none',
          }}
          component={Link}
          to="/"
        >
          Blog Website
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {categories.map((category, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={`/category/${category.toLowerCase()}`}
              sx={{
                color: '#ffffff',
                borderRadius: '20px',
                textTransform: 'capitalize',
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: mode === 'dark' ? '#444' : '#ffffff33',
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
            marginLeft: 2,
            padding: '8px 20px',
            color: mode === 'dark' ? '#333' : '#ffffff',
            backgroundColor: mode === 'dark' ? '#ffcc00' : '#ff6b6b',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: mode === 'dark' ? '#ffa31a' : '#ff4949',
            },
          }}
        >
          Create Blog
        </Button>

        <IconButton
          color="inherit"
          onClick={toggleTheme}
          sx={{ ml: 2, borderRadius: '50%', backgroundColor: mode === 'dark' ? '#444' : '#ffffff33', padding: '8px' }}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
