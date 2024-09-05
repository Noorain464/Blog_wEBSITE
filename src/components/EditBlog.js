import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editBlog } from '../redux/Action';
import { Container, TextField, Button, Typography, Box, MenuItem } from '@mui/material';

const EditBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const blog = useSelector((state) => state.blog.blogs.find((blog) => blog.id === parseInt(id)));

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setAuthor(blog.author);
      setContent(blog.content);
      setImage(blog.image);
      setCategory(blog.category);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { id: blog.id, title, author, content, image, category, date: blog.date };
    dispatch(editBlog(updatedBlog));
    navigate(`/blog/${id}`);
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Edit Blog
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
          <Button variant="contained" color="primary" type="submit" size="large">
            Update Blog
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default EditBlog;
