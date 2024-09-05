import { ADD_BLOG, EDIT_BLOG, DELETE_BLOG } from './Action';

const initialState = {
  blogs: [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the full content of the first blog post.',
      category: 'technology',
      author: 'John Doe',
      date: '2024-09-01',
      image: '/images/tech1.jpg',
    },
    // More initial blogs...
  ],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return { ...state, blogs: [...state.blogs, action.payload] };
    case EDIT_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload.updatedBlog : blog
        ),
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
      };
    default:
      return state;
  }
};

export default blogReducer;
