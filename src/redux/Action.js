export const FETCH_BLOGS = 'FETCH_BLOGS';
export const ADD_BLOG = 'ADD_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG'; 
export const DELETE_BLOG = 'DELETE_BLOG'; 

export const fetchBlogs = (blogs) => ({
  type: FETCH_BLOGS,
  payload: blogs,
});

export const addBlog = (blog) => ({
  type: ADD_BLOG,
  payload: blog,
});

export const editBlog = (updatedBlog) => ({
  type: EDIT_BLOG,
  payload: updatedBlog,
});

export const deleteBlog = (id) => ({
  type: DELETE_BLOG,
  payload: id,
});
