import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editBlog } from '../redux/Action';
import BlogForm from '../components/BlogForm';

const EditBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id.toString() === id)
  );

  const handleEditBlog = (updatedBlog) => {
    dispatch(editBlog(blog.id, { ...updatedBlog, id: blog.id }));
    navigate('/');
  };

  return blog ? <BlogForm initialData={blog} onSubmit={handleEditBlog} /> : <div>Blog not found</div>;
};

export default EditBlog;
