import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];

  return (
    <AppBar position="static" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Blog Website
          </Link>
        </Typography>
        {categories.map((category, index) => (
          <Button key={index} color="inherit">
            <Link to={`/category/${category.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {category}
            </Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
