import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, excerpt, date }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardActionArea component={Link} to={`/blog/${id}`}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="body1">{excerpt}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogPost;
