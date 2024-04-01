import React from "react";
import homeImage from "../assets/maldives.jpg";
import './home.css'; 

export default function Home() {
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
            <input type="text" placeholder="Spain" />
          </div>
          <div className="container">
            <label>Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label>Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  );
}
