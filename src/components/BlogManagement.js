import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from './Action';
import { Button, Card, CardContent, Typography } from '@mui/material';

const BlogManagement = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs || []);

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  return (
    <div>
      {blogs.map((blog) => (
        <Card key={blog.id} variant="outlined" sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(blog.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              {blog.content.substring(0, 100)}...
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(blog.id)}
              sx={{ marginTop: 2 }}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogManagement;
