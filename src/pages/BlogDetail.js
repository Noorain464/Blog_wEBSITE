import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Box, Button } from '@mui/material';
import { deleteBlog } from '../redux/Action';

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const blog = blogs.find((b) => b.id.toString() === id);

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
  };

  if (!blog) return <Typography variant="h6">Blog not found.</Typography>;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        {blog.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        By {blog.author} | Published on {blog.date}
      </Typography>
      <Box component="img" src={blog.image} alt={blog.title} sx={{ width: '100%', height: 'auto', marginBottom: 4 }} />
      <Typography variant="body1" component="div" gutterBottom>
        {blog.content}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete Blog
      </Button>
      <Link to={`/edit/${id}`}>
        <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>
          Edit Blog
        </Button>
      </Link>
    </Container>
  );
};

export default BlogDetail;
