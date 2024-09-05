import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../redux/Action';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h6" color="error" align="center">
          Blog not found.
        </Typography>
      </Container>
    );
  }

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/edit-blog/${blog.id}`);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4, paddingX: 2 }}>
      <IconButton 
        color="primary" 
        onClick={() => navigate(-1)}
        sx={{ marginBottom: 3, display: { xs: 'block', md: 'none' } }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {blog.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom sx={{ textAlign: 'center' }}>
        By {blog.author} | Published on {blog.date}
      </Typography>
      <Box
        component="img"
        src={blog.image}
        alt={blog.title}
        sx={{
          width: '100%',
          height: 'auto',
          marginBottom: 4,
          borderRadius: 2,
          boxShadow: 2,
        }}
      />
      <Typography variant="body1" component="div" paragraph sx={{ lineHeight: 1.6 }}>
        {blog.content}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleEdit}
          sx={{ backgroundColor: '#ff6f61', '&:hover': { backgroundColor: '#ff9a8b' } }}
        >
          Edit Blog
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          sx={{ backgroundColor: '#ff4081', '&:hover': { backgroundColor: '#f50057' } }}
        >
          Delete Blog
        </Button>
      </Box>
    </Container>
  );
};

export default BlogDetail;
