import React from 'react';
import { useSelector } from 'react-redux';
import BlogPost from './BlogPost';

const BlogList = ({ searchQuery, category }) => {
  const blogs = useSelector((state) => state.blog.blogs);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = category === 'all' || blog.category === category;
    const matchesSearchQuery =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div>
      {filteredBlogs.map((blog) => (
        <BlogPost
          key={blog.id}
          id={blog.id}
          title={blog.title}
          excerpt={blog.content.substring(0, 100) + '...'}
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
