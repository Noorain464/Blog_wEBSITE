import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const FeaturedBlogs = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  return (
    <div>
      {blogs.slice(0, 3).map((blog) => (
        <Card key={blog.id} variant="outlined" sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date().toLocaleDateString()} {/* Placeholder for publication date */}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              {blog.content.substring(0, 100)}... {/* Excerpt */}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedBlogs;
