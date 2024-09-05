import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import BlogList from './components/BlogList';
import Navbar from './components/NavBar';
import FeaturedBlogs from './components/FeatureBlog';
import CategoryPage from './pages/CategoryPage';
import BlogDetail from './pages/BlogDetail';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/FilterCategory';
import { Theme } from '../src/components/Theme';
import { Container, Typography } from '@mui/material';
import BlogForm from '../src/components/BlogForm';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <Theme>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Container maxWidth="md" sx={{ paddingTop: 4 }}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <CategoryFilter category={category} setCategory={setCategory} />
            <Routes>
              <Route path="/" element={
                <>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Featured Blogs
                  </Typography>
                  <FeaturedBlogs />
                  <Typography variant="h4" component="h2" gutterBottom sx={{ marginTop: 4 }}>
                    All Blogs
                  </Typography>
                  <BlogList searchQuery={searchQuery} category={category} />
                </>
              } />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
          </Container>
        </Router>
        <BlogForm/>
      </Provider>
    </Theme>
  );
}

export default App;
