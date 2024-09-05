import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleChange = (e) => {
        console.log("Search Query:", e.target.value);
        setSearchQuery(e.target.value);
    };

    return (
        <TextField
            label="Search Blogs"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleChange}
            sx={{
                marginBottom: 2, // Adjust spacing as needed
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                },
                '& .MuiInputLabel-root': {
                    color: 'text.primary',
                },
                '& .MuiOutlinedInput-input': {
                    color: 'text.primary',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'divider',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                },
            }}
        />
    );
};

export default SearchBar;
