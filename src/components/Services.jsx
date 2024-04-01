import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service4 from "../assets/service4.png";
import './Services.css';

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];

  return (
    <section id="services" className="services-section">
      {data.map((service, index) => (
        <div className="service" key={index}>
          <div className="icon">
            <img src={service.icon} alt="" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.subTitle}</p>
        </div>
      ))}
    </section>
  );
}
