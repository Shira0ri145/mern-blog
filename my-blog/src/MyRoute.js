import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import FormComponent from './components/FormComponent';
import BlogsComponent from './components/BlogsComponent';
import BlogDetails from './components/BlogDetails';
import BlogEdit from './components/BlogEdit';
import LoginComponent from './components/LoginComponent';
import AdminRoute from './AdminRoute';

const MyRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/blogs" element={<BlogsComponent />} />
                <Route path="/create" element={<AdminRoute element={FormComponent} />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                <Route path="/blog/edit/:slug" element={<AdminRoute element={BlogEdit} />} />
                <Route path="/login" element={<LoginComponent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoute;
