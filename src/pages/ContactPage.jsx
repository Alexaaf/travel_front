import React, { useEffect } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTop from '../components/scrollToTop';
import ContactUs from "../components/contact_us";

export default function ContactPage() {
  
      return (
        <div>
          <ScrollToTop />
          <Navbar />
          <ContactUs />
          <Footer />
        </div>
      );
}