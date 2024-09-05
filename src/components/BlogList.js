// src/components/BlogList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../redux/Action';
import BlogPost from './BlogPost';
import Highlight from './Highlight'; // Import the Highlight component

const BlogList = ({ searchQuery, category }) => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

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
          title={<Highlight text={blog.title} query={searchQuery} />} // Use Highlight for title
          excerpt={<Highlight text={blog.content.substring(0, 100) + '...'} query={searchQuery} />} // Use Highlight for excerpt
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
