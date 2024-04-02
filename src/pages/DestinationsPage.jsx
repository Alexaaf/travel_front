import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTop from '../components/scrollToTop';
import Recommend from '../components/Recommend';
import Offers from "../components/Offers";
import DestHead from "../components/destHead";
import '../index.css';
import { useLocation } from 'react-router-dom';

export default function DestinationsPage() {

  const location = useLocation();
  const searchQuery = location.state?.query;
    
  return (
    <div className="detination_page_div">
      <ScrollToTop />
      <Navbar />
      <DestHead />
      <Recommend query={searchQuery}/>
      <Offers query={searchQuery}/>
      <Footer />
    </div>
  );
}