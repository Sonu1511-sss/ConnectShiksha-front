import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorkshopPage from './pages/WorkshopPage';
import CoursePage from './pages/CoursePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ContactUsPage from './pages/ContactUsPage';


const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/Course" element={<CoursePage />} />
        <Route path="/AboutsUs" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/Contact" element={<ContactUsPage />} />



  
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
