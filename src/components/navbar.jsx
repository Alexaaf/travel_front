import React, { useState, useEffect } from "react";
import './Navbar.css';

export default function Navbar() {

  const [userName, setUserName] = useState("Log In");
  const [redirectLink, setRedirectLink] = useState("/login");

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = async () => {
    const name = sessionStorage.getItem("userName");
    if (name != null)
    {
      setUserName(name.toUpperCase());
      setRedirectLink("/home");
    }
  }
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
          {/* <li>
            <a href="/blog">Blog</a>
          </li> */}
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href={redirectLink}>{userName}</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
