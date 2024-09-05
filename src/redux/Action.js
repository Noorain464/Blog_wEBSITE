// Action Types
export const FETCH_BLOGS = 'FETCH_BLOGS';
export const ADD_BLOG = 'ADD_BLOG';

// Action Creators
export const fetchBlogs = () => {
    return {
      type: FETCH_BLOGS,
      payload: [
        {
          id: 1,
          title: 'First Blog Post',
          content: 'This is the full content of the first blog post.',
          excerpt: 'This is a brief excerpt of the first blog post.',
          category: 'technology',
          author: 'John Doe',
          date: '2024-09-01',
          image: '/images/tech1.jpg'
        },
        {
          id: 2,
          title: 'Second Blog Post',
          content: 'Exploring new travel destinations in detail.',
          excerpt: 'Exploring new travel destinations...',
          category: 'travel',
          author: 'Jane Smith',
          date: '2024-08-25',
          image: '/images/travel1.jpg'
        },
        // Add more blogs here...
      ]
    };
  };
  

  export const EDIT_BLOG = 'EDIT_BLOG';
  export const DELETE_BLOG = 'DELETE_BLOG';
  
  export const addBlog = (blog) => ({
    type: ADD_BLOG,
    payload: blog,
  });
  
  export const editBlog = (id, updatedBlog) => ({
    type: EDIT_BLOG,
    payload: { id, updatedBlog },
  });
  
  export const deleteBlog = (id) => ({
    type: DELETE_BLOG,
    payload: id,
  });
  