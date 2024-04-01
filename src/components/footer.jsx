import React from "react";
import { BsLinkedin, BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import './footer.css';

export default function Footer() {
  return (
    <div className="wraper">
      <div className="FooterContainer inline-row">
        <div>
          <div className="social-color">Support</div>
          <ul className="links cols">
            <li className="li_cols">
              <p>Help Center</p>
            </li>
            <li className="li_cols">
              <p>Safety Information</p>
            </li>
            <li className="li_cols">
              <p>Cancelation Options</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="social-color">Company</div>
          <ul className="links cols">
            <li className="li_cols">
              <p>About Us</p>
            </li>
            <li className="li_cols">
              <p>Privacy policy</p>
            </li>
            <li className="li_cols">
              <p>Community Blog</p>
            </li>
            <li className="li_cols">
              <p>Terms of service</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="social-color">Contact</div>
          <ul className="links cols">
            <li className="li_cols">
              <p>FAQ</p>
            </li>
            <li className="li_cols">
              <p>Get in touch</p>
            </li>
            <li className="li_cols">
              <p>Partnerships</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="social-color">Social</div>
            <ul className="social_links social_links_gap">
              <li className="li_cols">
                <BsFacebook />
              </li>
              <li className="li_cols">
                <AiFillInstagram />
              </li>
              <li className="li_cols">
                <BsLinkedin />
              </li>
              <li className="li_cols">
                <BsYoutube></BsYoutube>
              </li>
            </ul>
        </div>
        
      </div>
      <span className="span-col">Copyright &copy; 2024 Speedy Getaways. All rights reserved</span>
    </div>
    

  );
}
