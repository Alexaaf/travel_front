import React from "react";
import avatarImage from "../assets/avatarImage.jpeg";
import './Testimonials.css';

export default function Testimonials() {

  const testimonialsData = [
    {
      avatarImage: avatarImage,
      testimonialText: "Our trip to Bali was unforgettable! The recommendations for off-the-beaten-path adventures truly made our vacation special. Thank you for the impeccable service.",
      author: "Emily R.",
      rating: "★★★★",
    },
    {
      avatarImage: avatarImage,
      testimonialText: "Booking our family vacation through this agency was a breeze. The attention to detail and personalized itineraries were beyond our expectations.",
      author: "Michael B.",
      rating: "★★★★★",
    },
    {
      avatarImage: avatarImage,
      testimonialText: "I was impressed with the responsive customer service and the wealth of knowledge about our destination. It made us feel well-prepared and safe throughout our journey.",
      author: "Sophia L.",
      rating: "★★★★★",
    },
    {
      avatarImage: avatarImage,
      testimonialText: "As first-time travelers to Japan, the cultural insights and tips provided by the agency were invaluable. Our trip was rich in experiences thanks to their thoughtful planning.",
      author: "Alexander T.",
      rating: "★★★★",
    },
  ];

  
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>{testimonial.testimonialText}</p>
          <div className="info">
            <img src={testimonial.avatarImage} alt="Avatar" />
            <div className="details">
              <h4>{testimonial.author}</h4>
              <span>{testimonial.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
