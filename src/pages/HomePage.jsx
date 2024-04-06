// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Home from '../components/home';
import ScrollToTop from '../components/scrollToTop';
import Testimonials from '../components/Testimonials';
import HomeCols from "../components/home_cols";
import Reviews from "../components/reviews";
import '../index.css';
// import axios from "axios";
import Cookies from 'js-cookie';


export default function HomePage() {

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationData = { latitude, longitude };
          Cookies.set('geolocation', JSON.stringify(locationData), { expires: 1 });
          const geolocationCookie = Cookies.get('geolocation');
          if (geolocationCookie) {
            const geolocationData = JSON.parse(geolocationCookie);
            console.log(geolocationData);
          }
        },
        (error) => {
          console.error("Error accessing the geolocation API", error);
        }
      );
    } else {
      console.error("Geolocation API not supported by this browser.");
    }
  };
    
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