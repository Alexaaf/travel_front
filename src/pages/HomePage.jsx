import React, { useEffect } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Home from '../components/home';
import ScrollToTop from '../components/scrollToTop';
import Testimonials from '../components/Testimonials';
import HomeCols from "../components/home_cols";
import Reviews from "../components/reviews";
import '../index.css';

export default function HomePage() {
    
      return (
        <div className="home_root_div">
          <ScrollToTop />
          <Navbar />
          <Home />
          <Reviews />
          <Testimonials />
          <HomeCols />
          <Footer />
        </div>
      );
}