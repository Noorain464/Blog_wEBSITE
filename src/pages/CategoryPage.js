import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

const CategoryPage = () => {
  const { category } = useParams();
  const blogs = useSelector((state) => state.blog.blogs);
  const filteredBlogs = blogs.filter((blog) => blog.category === category);

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        {category.charAt(0).toUpperCase() + category.slice(1)} Blogs
      </Typography>
      {filteredBlogs.map((blog) => (
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

export default CategoryPage;
