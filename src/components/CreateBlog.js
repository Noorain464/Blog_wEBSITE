import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlog } from '../redux/Action';
import { Container, TextField, Button, Typography, Box, MenuItem, useTheme } from '@mui/material';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !content || !category) {
      alert('Please fill in all required fields.');
      return;
    }
    const newBlog = {
      id: Date.now(),
      title,
      author,
      content,
      image,
      category,
      date: new Date().toLocaleDateString(),
    };
    dispatch(addBlog(newBlog));
    navigate('/'); 
  };

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        marginTop: 4, 
        backgroundColor: theme.palette.background.paper, 
        padding: 4, 
        borderRadius: 2, 
        boxShadow: 3,
        '@media (max-width:600px)': {
          padding: 2,
        }
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        align="center"
        sx={{
          color: theme.palette.mode === 'dark' ? '#ffeb3b' : '#ff6f61',
          fontWeight: 'bold',
        }}
      >
        Create a New Blog
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          required
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          select
          fullWidth
          required
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="technology">Technology</MenuItem>
          <MenuItem value="lifestyle">Lifestyle</MenuItem>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="travel">Travel</MenuItem>
        </TextField>
        <TextField
          fullWidth
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          required
          label="Content"
          multiline
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Box sx={{ textAlign: 'center', marginTop: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            size="large"
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? '#ff6f61' : '#ff4081',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? '#ff9a8b' : '#f50057',
              },
              borderRadius: '30px',
              fontWeight: 'bold',
            }}
          >
            Submit Blog
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateBlog;
