import React, { useState } from "react";
import homeImage from "../assets/maldives.jpg";
import { useNavigate } from 'react-router-dom';
import './home.css'; 

export default function Home() {

  const [queryN, setQuery] = useState('sPain');
  const navigate = useNavigate();

  const goToDestinations = () => {
    navigate('/destinations', { state: { query: queryN } });
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <section id="hero" className="hero">
      <div className="background">
        <img src={homeImage} alt="Home" />
      </div>
      <div className="content">
        <div className="title">
          <h1>WELCOME!</h1>
          <p>
          Explore beautiful places in the world with Speedy Getaways
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label>Destination</label>
            <input type="text" placeholder="Spain" onChange={handleInputChange}/>
          </div>
          <div className="container">
            <label>Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label>Check-out</label>
            <input type="date" />
          </div>
          <button onClick={goToDestinations}>Explore Now</button>
        </div>
      </div>
    </section>
  );
}
