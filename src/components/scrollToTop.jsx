import React, { useState, useEffect } from "react";
import logo from "../assets/info1.png";
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`to-top ${scrollState ? "show" : ""}`} onClick={toTop}>
      <img src={logo} alt="Scroll to top" />
    </div>
  );
}
