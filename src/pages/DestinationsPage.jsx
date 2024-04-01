import React, { useEffect } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTop from '../components/scrollToTop';
import Recommend from '../components/Recommend';
import Offers from "../components/Offers";
import DestHead from "../components/destHead";
import '../index.css';

export default function DestinationsPage() {
    
      return (
        <div className="detination_page_div">
          <ScrollToTop />
          <Navbar />
          <DestHead />
          <Recommend />
          <Offers />
          <Footer />
        </div>
      );
}