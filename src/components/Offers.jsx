import React, { useEffect, useState } from "react";
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
import axios from "axios";


export default function Offers(props) {

  const [data, setData] = useState([]);

  const images = {
    Singapore: Destination1,
    Thailand: Destination2,
    Paris: Destination3,
    Zealand: Destination4,
    Bora: Destination5,
    London: Destination6
  };

  useEffect(() => {
    const fetchData = async () => {
      // console.log(props.query);
      if(props.query === undefined){
        try {
          const apiUrl = `http://127.0.0.1:5000/api/destination/get_all`;
          const response = await axios.get(apiUrl);
          // console.log(response.data);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }else{
        try {
          const apiUrl = `http://127.0.0.1:5000/api/destination/location?location=${encodeURIComponent(props.query)}`;
          const response = await axios.get(apiUrl);
          // console.log(response.data);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();

    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section id="offers" className="recommend">
      <div className="title">
        <h2>OFFERS</h2>
      </div>
      <div className="destinations">
      {data.filter(destination => destination.offer > 0).map((destination) => (
        <div className="destination" key={destination.id}>
          <img src={images[destination.image]} alt={destination.name} />
          <div className="dest_title">
            <h3>{destination.name}</h3>
            <h4>
              {destination.offer > 0 ? (
                <>
                  <span style={{ textDecoration: 'line-through', color: 'red' }}>
                    ${destination.price_pn.toFixed(2)}
                  </span>
                  &nbsp;
                  ${(
                    destination.price_pn - 
                    destination.price_pn * (destination.offer / 100)
                  ).toFixed(2)} per night
                </>
              ) : (
                <>${destination.price_pn.toFixed(2)} per night</>
              )}
            </h4>
          </div>
          <h5>{destination.location}</h5>
          <div className="info">
            <p className="description">Available places: {destination.available_places}</p>
            <div className="services">
              {destination.plane && <BsAirplane style={{ color: 'black' }} />}
              {destination.hotel && <BsFillHouseFill style={{ color: 'black' }} />}
              {destination.baggage && <BsLuggageFill style={{ color: 'black' }} />}
            </div>
          </div>
          <button className="overlay-button">Explore</button>
        </div>
      ))}
      </div>
    </section>
  );
}
