import * as React from "react";
import "./DestHead.css";

export default function DestHead() {

  const scroll_down = () => {
    const offersSection = document.getElementById("offers");
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="destination-header">
        <div className="title_head">EXPLORE MALDIVES</div>
        <div className="content-section">
          <div className="main-content">
            <div className="description-column">
              <div className="description-box">
              <div className="description-text">
                Dive into the heart of paradise where the azure waters of the Indian Ocean lap against pristine white sands.
                The Maldives, a tropical haven of over a thousand islands, offers an escape to a world of breathtaking beauty and serene tranquility.
              </div>
                <button className="action-section" onClick={scroll_down}>
                  <div>See Offers</div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eeb96d1e4c1df8c2aeac0624fcf91ce73c731e5876c02ef1b9e24d2840fcbf5?" className="main-image" alt=" "/>
                </button>
              </div>
            </div>
            <div className="images-column">
              <div className="images-box">
                <div className="image-group">
                  <div className="image-container">
                    <div className="image-description">
                      <img loading="lazy" src="https://i.imgur.com/6BMvZJX.jpeg" className="image-small" alt=" "/>
                      <div className="image-caption">Azure Haven</div>
                    </div>
                  </div>
                  <div className="image-container">
                    <div className="image-description">
                      <img loading="lazy" src="https://i.imgur.com/WDmvSab.jpeg" className="image-small" alt=" "/>
                      <div className="image-caption">Serene Sanctuary</div>
                    </div>
                  </div>
                  <div className="image-container">
                    <div className="image-description">
                      <img loading="lazy" src="https://i.imgur.com/bJVCCxK.jpeg" className="image-small" alt=" "/>
                      <div className="image-caption">Verdant Vista</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
