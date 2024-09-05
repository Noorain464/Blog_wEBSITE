import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleChange = (e) =>{
        console.log("Search Query:", e.target.value);
        setSearchQuery(e.target.value);
    }
  return (
    <TextField
      label="Search Blogs"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={handleChange}
      sx={{ marginBottom: 4 }}
    />
  );
};

export default SearchBar;
