import { FETCH_BLOGS, ADD_BLOG, EDIT_BLOG, DELETE_BLOG } from './Action';

const initialState = {
  blogs: [
    {
      id: 1,
      title: 'The Rise of Technology in 2024',
      author: 'Jane Doe',
      content: 'Technology has been evolving at an unprecedented rate...',
      image: 'https://via.placeholder.com/800x400?text=Tech+Blog',
      category: 'technology',
      date: '2024-08-30',
    },
    {
      id: 2,
      title: 'Top 10 Travel Destinations for 2024',
      author: 'John Smith',
      content: 'Discover the best travel destinations for the upcoming year...',
      image: 'https://via.placeholder.com/800x400?text=Travel+Blog',
      category: 'travel',
      date: '2024-08-29',
    },
    {
      id: 3,
      title: 'Healthy Eating Habits for a Better Life',
      author: 'Emily Johnson',
      content: 'Eating healthy is essential for maintaining a good lifestyle...',
      image: 'https://via.placeholder.com/800x400?text=Food+Blog',
      category: 'food',
      date: '2024-08-28',
    },
    {
      id: 4,
      title: 'Lifestyle Changes for a More Productive Day',
      author: 'Michael Brown',
      content: 'Implementing these lifestyle changes can help improve productivity...',
      image: 'https://via.placeholder.com/800x400?text=Lifestyle+Blog',
      category: 'lifestyle',
      date: '2024-08-27',
    },
  ],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case EDIT_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload : blog
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
