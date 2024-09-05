import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

const BlogForm = ({ onSubmit, initialData = {} }) => {
  const [blog, setBlog] = useState({
    title: initialData.title || '',
    content: initialData.content || '',
    category: initialData.category || '',
    author: initialData.author || '',
    date: initialData.date || '',
    image: initialData.image || '',
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(blog);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        {initialData.id ? 'Edit Blog' : 'Create Blog'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={blog.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Content"
          name="content"
          value={blog.content}
          onChange={handleChange}
          multiline
          rows={6}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Category"
          name="category"
          value={blog.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Author"
          name="author"
          value={blog.author}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={blog.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Image URL"
          name="image"
          value={blog.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          {initialData.id ? 'Update Blog' : 'Create Blog'}
        </Button>
      </form>
    </Container>
  );
};

export default BlogForm;
