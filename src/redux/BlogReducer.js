import { FETCH_BLOGS, ADD_BLOG, EDIT_BLOG, DELETE_BLOG } from './Action';

const initialState = {
  blogs: [
    {
      id: 1,
      title: 'The Rise of Technology in 2024',
      author: 'Jane Doe',
      content: 'Technology has been evolving at an unprecedented rate...',
      image: 'https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg',
      category: 'technology',
      date: '2024-08-30',
    },
    {
      id: 2,
      title: 'Top 10 Travel Destinations for 2024',
      author: 'John Smith',
      content: 'Discover the best travel destinations for the upcoming year...',
      image: 'https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg',
      category: 'travel',
      date: '2024-08-29',
    },
    {
      id: 3,
      title: 'Healthy Eating Habits for a Better Life',
      author: 'Emily Johnson',
      content: 'Eating healthy is essential for maintaining a good lifestyle...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUdacVd9vgaiZxhSg_FilFiT7iLUSYlMl91lJkDulGUAOmoBBhe0ipL-wrfFvEKkHM-g&usqp=CAU',
      category: 'food',
      date: '2024-08-28',
    },
    {
      id: 4,
      title: 'Lifestyle Changes for a More Productive Day',
      author: 'Michael Brown',
      content: 'Implementing these lifestyle changes can help improve productivity...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRSmNeSML9z2NhjweZq_8fQMJnOFIS0WIow&s',
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
