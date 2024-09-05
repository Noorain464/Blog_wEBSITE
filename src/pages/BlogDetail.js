import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography, Box } from '@mui/material';

const BlogDetail = () => {
  const { id } = useParams(); 
  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((b) => b.id.toString() === id); 

  if (!blog) {
    return <Typography variant="h6">Blog not found.</Typography>;
  }

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
    </Container>
  );
};

export default BlogDetail;
