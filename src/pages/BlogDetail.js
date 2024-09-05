import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../redux/Action';
import { Container, Typography, Box, Button } from '@mui/material';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return <Typography variant="h6">Blog not found.</Typography>;
  }

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/edit-blog/${blog.id}`);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {blog.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        By {blog.author} | Published on {blog.date}
      </Typography>
      <Box
        component="img"
        src={blog.image}
        alt={blog.title}
        sx={{ width: '100%', height: 'auto', marginBottom: 4 }}
      />
      <Typography variant="body1" component="div">
        {blog.content}
      </Typography>
      <Box sx={{ marginTop: 3 }}>
        <Button variant="contained" color="primary" onClick={handleEdit} sx={{ marginRight: 2 }}>
          Edit Blog
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete Blog
        </Button>
      </Box>
    </Container>
  );
};

export default BlogDetail;
