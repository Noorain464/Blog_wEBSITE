import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../redux/Action';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const HomePage = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom>
        All Blogs
      </Typography>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Typography variant="h5" component="h3">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </Typography>
          <Typography variant="body2">{blog.date}</Typography>
          <Typography variant="body1">{blog.content.substring(0, 100)}...</Typography>
          <Button component={Link} to={`/edit/${blog.id}`} variant="outlined" color="primary">
            Edit
          </Button>
          <Button onClick={() => handleDelete(blog.id)} variant="outlined" color="secondary">
            Delete
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default HomePage;
