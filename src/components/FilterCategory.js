import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CategoryFilter = ({ category, setCategory }) => {
    const categories = ['All', 'Technology', 'Travel', 'Food', 'Lifestyle'];

    return (
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Filter by Category</InputLabel>
            <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Filter by Category"
                sx={{
                    borderRadius: 1,
                    '& .MuiSelect-select': {
                        color: 'text.primary',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'divider',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                    },
                }}
            >
                {categories.map((cat) => (
                    <MenuItem key={cat} value={cat.toLowerCase()}>
                        {cat}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CategoryFilter;
