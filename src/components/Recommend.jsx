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
import { differenceInCalendarDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';


export default function Recommend(props) {

  const [data, setData] = useState([]);

  const images = {
    Singapore: Destination1,
    Thailand: Destination2,
    Paris: Destination3,
    Zealand: Destination4,
    Bora: Destination5,
    London: Destination6
  };

  const makeReservation = async (destinationId, pricePerNight, offer) => {
    const userId = sessionStorage.getItem("userId"); // Retrieve user ID from session storage
    if (!userId) {
      alert("Please log in to make a reservation.");
      return;
    }
    
    if(props.query === undefined){
      alert("Please go to the Home Page and choose the reservation dates.");
      return;
    }
    const { checkIn, checkOut } = props.query;

    const nights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    const invoicePrice = nights * pricePerNight * ((100 - offer) / 100);
  
    try {
      await axios.post('http://127.0.0.1:5000/api/reservation/add', {
        id_user: parseInt(userId),
        id_destination: destinationId,
        start_date: checkIn,
        end_date: checkOut,
        invoice_price: invoicePrice
      });
      alert('Reservation made successfully!');
    } catch (error) {
      console.error('Error creating reservation:', error);
      alert('Failed to make reservation.');
    }
  };

  const navigate = useNavigate();

  const handleSeeDetails = (destinationId) => {
    navigate(`/destination/${destinationId}`);
  };

  useEffect(() => {
    const fetchReservationsAndDestinations = async () => {
      
      try {

        const reservationsResponse = await axios.get('http://127.0.0.1:5000/api/reservation/get_all');
        const reservations = reservationsResponse.data;
  
        const destinationsApiUrl = props.query === undefined 
          ? `http://127.0.0.1:5000/api/destination/get_all` 
          : `http://127.0.0.1:5000/api/destination/location?location=${encodeURIComponent(props.query['location'])}`;
  
        const destinationsResponse = await axios.get(destinationsApiUrl);
        let destinations = destinationsResponse.data;
  
        if (props.query && props.query.checkIn && props.query.checkOut) {
          const checkInDate = new Date(props.query.checkIn);
          const checkOutDate = new Date(props.query.checkOut);
  
          destinations = destinations.filter(destination => {

            const conflictingReservations = reservations.filter(reservation => {
              const reservationStartDate = new Date(reservation.start_date);
              const reservationEndDate = new Date(reservation.end_date);
              return reservation.id_destination === destination.id &&
                ((checkInDate >= reservationStartDate && checkInDate <= reservationEndDate) ||
                (checkOutDate >= reservationStartDate && checkOutDate <= reservationEndDate) ||
                (checkInDate <= reservationStartDate && checkOutDate >= reservationEndDate));
            });

            return conflictingReservations.length === 0;
          });
        }
  
        setData(destinations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchReservationsAndDestinations();
    const intervalId = setInterval(fetchReservationsAndDestinations, 3000);
  
    return () => clearInterval(intervalId);
  }, [props.query]);
  

  if(sessionStorage.getItem("userRole") !== "AGENT"){
    return (
      <section id="recommend" className="recommend">
        <div className="title">
          <h2>TOP BOOK NOW</h2>
        </div>
        <div className="destinations">
        {data.filter(destination => destination.offer === 0).map((destination) => (
          <button className="overlay-button" onClick={() => makeReservation(destination.id, destination.price_pn, destination.offer)}>
            <div className="destination" key={destination.id}>
              <img src={images[destination.image]} alt={destination.name} />
              <div className="dest_title">
                <h3>{destination.name}</h3>
                <h4>${destination.price_pn} per night</h4>
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
            </div>
          </button>
        ))}
        </div>
      </section>
    );
  }

  if(sessionStorage.getItem("userRole") === "AGENT"){
    return (
      <section id="recommend" className="recommend">
        <div className="title">
          <h2>AGENT PAGE</h2>
        </div>
        <div className="destinations">
        {data.filter(destination => destination.offer === 0).map((destination) => (
            <div className="destination" key={destination.id}>
              <img src={images[destination.image]} alt={destination.name} />
              <div className="dest_title">
                <h3>{destination.name}</h3>
                <h4>${destination.price_pn} per night</h4>
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
              <button onClick={() => handleSeeDetails(destination.id)}>See Details</button>
            </div>
        ))}
        </div>
      </section>
    );
  }
}
