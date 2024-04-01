import React from "react";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/london.jpg";
import './Recommend.css';
import { BsAirplane } from "react-icons/bs";
import { BsLuggageFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";


export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      cost: "$1,500",
      duration: " 2 night trip",
      distance: "9,000 kms",
    },
    {
      image: Destination2,
      title: "Thailand",
      cost: "$1,200",
      duration: " 2 night trip",
      distance: "8,000 kms", 
    },
    {
      image: Destination3,
      title: "Paris",
      cost: "$700",
      duration: " 2 night trip",
      distance: "1,500 kms",
    },
    {
      image: Destination4,
      title: "New Zealand",
      cost: "$2,000",
      duration: " 1 night trip",
      distance: "18,000 kms", 
    },
    {
      image: Destination5,
      title: "Bora Bora",
      cost: "$3,000",
      duration: " 2 night trip",
      distance: "15,500 kms", 
    },
    {
      image: Destination6,
      title: "London",
      cost: "$800",
      duration: " 3 night trip",
      distance: "2,000 kms", 
    },
  ];
  
  return (
    <section id="recommend" className="recommend">
      <div className="title">
        <h2>TOP BOOK NOW</h2>
      </div>
      <div className="destinations">
        {data.map((destination, index) => (
          <div className="destination" key={index}>
            <img src={destination.image} alt={destination.title} />
            <div className="dest_title">
              <h3>{destination.title}</h3>
              <h4>{destination.cost}</h4>
            </div>
            <div className="info">
              <div className="services">
                <BsAirplane style={{ color: 'black' }} />
                <BsFillHouseFill style={{ color: 'black' }} />
                <BsLuggageFill style={{ color: 'black' }} />
              </div>
            </div>            
            <div className="distance">
              <span>{destination.distance}</span>
              <span>{destination.duration}</span>
            </div>
            <button className="overlay-button">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
}
