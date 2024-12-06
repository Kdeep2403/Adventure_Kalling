import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './pages/Home';
import Blog from './pages/Blog';
import Beaches from './pages/Categories/Beaches' ;
import Hikes from './pages/Categories/Hikes' ;
import Monuments from './pages/Categories/Monuments' ;
import Volcanoes from './pages/Categories/Volcanoes' ;
import Waterfalls from './pages/Categories/Waterfalls' ;
import Wildlife from './pages/Categories/Wildlife' ;
import Images from './pages/Images';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPostForm from './components/BlogPostForm';
import BlogPostDetail from './components/BlogPostDetail';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (

    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/blog" element={<Blog />} />
        <Route path="/categories/beaches" element={<Beaches />} />
        <Route path="/categories/hikes" element={<Hikes />} />
        <Route path="/categories/monuments" element={<Monuments />} />
        <Route path="/categories/volcanoes" element={<Volcanoes />} />
        <Route path="/categories/waterfalls" element={<Waterfalls />} />
        <Route path="/categories/wildlife" element={<Wildlife />} />
        <Route path="/pages/images" element={<Images />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/blogpost/:id" element={<BlogPostDetail />} />
        <Route path="/blogpostform" element={<BlogPostForm />} />
      </Routes>
    </Router>
  );
};

export default App;