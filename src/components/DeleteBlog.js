import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteBlog } from '../redux/Action';
import { Container, Button, Typography } from '@mui/material';

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blog = useSelector((state) => state.blogs.find((blog) => blog.id === parseInt(id)));

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    navigate('/');
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        {blog.title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        By {blog.author} | {blog.date}
      </Typography>
      <Typography paragraph>
        {blog.content}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete Blog
      </Button>
    </Container>
  );
};

export default BlogDetail;
