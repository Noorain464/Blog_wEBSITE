import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import store from './redux/store';
import BlogList from './components/BlogList';
import Navbar from './components/NavBar';
import FeaturedBlogs from './components/FeatureBlog';
import CategoryPage from './pages/CategoryPage';
import BlogDetail from './pages/BlogDetail';
import CreateBlog from './components/CreateBlog';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/FilterCategory';
import { Theme } from '../src/components/Theme';
import { Container, Typography, Box } from '@mui/material';
import EditBlog from './components/EditBlog';

const AppContent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('all');
    const location = useLocation();

    return (
        <Container maxWidth="md" sx={{ paddingTop: 4 }}>
            {location.pathname !== '/create-blog' && (
                <Box sx={{ mb: 4 }}>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <CategoryFilter category={category} setCategory={setCategory} />
                </Box>
            )}
            <Routes>
                <Route 
                    path="/" 
                    element={
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
                    } 
                />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/edit-blog/:id" element={<EditBlog />} />
            </Routes>
        </Container>
    );
};

function App() {
    return (
        <Theme>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <AppContent /> 
                </Router>
            </Provider>
        </Theme>
    );
}

export default App;
