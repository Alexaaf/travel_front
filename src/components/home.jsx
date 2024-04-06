import React, { useState } from "react";
import homeImage from "../assets/maldives.jpg";
import { useNavigate } from 'react-router-dom';
import './home.css'; 
import { differenceInCalendarDays, parseISO } from 'date-fns';

export default function Home() {

  const [queryN, setQuery] = useState({
    location: '',
    checkIn: '',
    checkOut: ''
  });

  const navigate = useNavigate();

  const validateDatesAndNavigate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const startDate = parseISO(queryN.checkIn);
    const endDate = parseISO(queryN.checkOut);
    
    if (startDate < today) {
      alert("The check-in date must be today or in the future.");
      return;
    }

    if (differenceInCalendarDays(endDate, startDate) < 1) {
      alert("The check-out date must be at least one day after the check-in date.");
      return;
    }

    if(queryN['checkIn'] === '' || queryN['checkOut'] === ''){
      alert("Please provide check-in and check-out dates.");
      return;
    }

    navigate('/destinations', { state: { query: queryN } });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value
    }));
  };

  return (
    <section id="hero" className="hero">
      <div className="background">
        <img src={homeImage} alt="Home" />
      </div>
      <div className="content">
        <div className="title">
          <h1>WELCOME!</h1>
          <p>Explore beautiful places in the world with Speedy Getaways</p>
        </div>
        <div className="search">
          <div className="container">
            <label>Destination</label>
            <input
              name="location"
              type="text"
              placeholder="Spain"
              value={queryN.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="container">
            <label>Check-in</label>
            <input
              name="checkIn"
              type="date"
              value={queryN.checkIn}
              onChange={handleInputChange}
            />
          </div>
          <div className="container">
            <label>Check-out</label>
            <input
              name="checkOut"
              type="date"
              value={queryN.checkOut}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={validateDatesAndNavigate}>Explore Now</button>
        </div>
      </div>
    </section>
  );
}
