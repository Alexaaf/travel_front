import React, { useState } from "react";
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="brand">
          <div className="container">
            <span className="italic-text">SPEEDY GETAWAYS</span>
          </div>
        </div>

        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/destinations">Destinations</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
