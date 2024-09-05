import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

const FeaturedBlogs = () => {
  const blogs = useSelector((state) => state.blog.blogs || []);

  return (
    <div>
      {blogs.slice(0, 3).map((blog) => (
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedBlogs;
