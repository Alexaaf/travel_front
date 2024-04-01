import * as React from "react";
import './reviews.css';

export default function Reviews() {

  const reviewsData = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccd884d0abad85cfa432c0f540050354745d23c535166a4538d39fc56024f14c?",
      title: "Competitive Prices",
      description: "We offer some of the best prices in the market without compromising on quality and experience.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/251b1b7415a0d1d2d74e514e74420cfbb865cbb8e907f15a318d5a6d186333a2?",
      title: "Secure Booking",
      description: "Your security and confidentiality are our top priorities. Book your dream trip with confidence.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/75710aa65c2401563b9768e11be461e3a3c53f7444737f3fe439415332c91d9c?",
      title: "Seamless Experience",
      description: "From planning to booking, we ensure a smooth and hassle-free process for a perfect travel experience.",
    },
  ];
  
  return (
    <>
      <div className="reviews-container">
        <div className="reviews-title">WHY CHOOSE US?</div>
        <div className="reviews-grid-container">
          {reviewsData.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-image-wrapper">
                <img loading="lazy" src={review.image} alt="Review" className="review-image" />
              </div>
              <div className="review-heading">{review.title}</div>
              <div className="review-text">{review.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

