import * as React from 'react';
import imagee from '../assets/Destination1.png';
import './home_cols.css';

export default function HomeCols() {
  return (
    <div className="homeCols-container">
      <div className="homeCols-contentWrapper">
        <div className="homeCols-imageColumn">
          <img loading="lazy" src={imagee} className="homeCols-image" alt="Travel Destination" />
        </div>
        <div className="homeCols-textColumn">
          <div className="homeCols-offersContainer">
            <div className="homeCols-offersText">
              Subscribe to our newsletter
              <br />
              and get special offers
            </div>
            <div className="homeCols-emailSubscription">
              <input type="input" class="homeCols-emailInput" placeholder="Enter your email" name="email" id='email' required />
              <button className="homeCols-subscribeButton">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
