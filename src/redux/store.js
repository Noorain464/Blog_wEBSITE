import { createStore } from 'redux';
import blogReducer from './BlogReducer';

const store = createStore(blogReducer);

export default store;
