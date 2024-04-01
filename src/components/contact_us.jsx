import React from "react";
import { BsLinkedin, BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import './contact_us.css';
import { BsPinMap } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactUs() {
  return (
    <div>
        <div className="contact-text">
            <div className="contact-us-title">Contact Us</div>
            <div className="contact-us-subtitle">Any question or remarks? Just write us a message!</div>
        </div>
        <div className="contact-form-container">
        <div className="contact-info">
            <div>
                <h2 className="form-title">Contact Information</h2>
                <p className="form-subtitle">Send us your thoughts!</p>
            </div>
            <div className="info">
                <div className="icons-align">
                    <BsTelephone />
                    <p className="p-padding">+40 757 751 172</p>
                </div>
                <div className="icons-align">
                    <BsPinMap />
                    <p className="p-padding">contact@speedy.gataways.com</p>
                </div>
                <div className="icons-align">
                    <AiOutlineMail />
                    <p className="p-padding">Cluj-Napoca, Cluj</p>
                </div>
            </div>
            <ul className="social_links">
              <li className="first-li">
                <BsFacebook />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <BsLinkedin />
              </li>
              <li>
                <BsYoutube></BsYoutube>
              </li>
            </ul>
          {/* Social media icons go here */}
        </div>
        <form className="form">
            <div className="personal-info">
                <div className="first_row">
                    <input type="input" class="form__field" placeholder="First Name" name="name" id='name' required />
                    <input type="input" class="form__field" placeholder="Last Name" name="name" id='name' required />
                </div>
                <div className="second_row">
                    <input type="input" class="form__field" placeholder="Email" name="email" id='email' required />
                    <input type="input" class="form__field" placeholder="Phone Number" name="name" id='name' required />
                </div>
            </div>
            <div className="message_form">
                <input type="input" class="form__field text text_area_width" placeholder="Write your message..." name="name" id='name' required />
                <button class="custom-btn btn-5" type="submit">Send</button>
            </div>
        </form>
      </div>
    </div>
    
  );
}
