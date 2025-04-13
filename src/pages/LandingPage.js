import React from "react";
import { Link } from "react-router-dom";
import "../TestimonialStyles.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-card">
        <h1>Welcome to Our Testimonial Portal</h1>
        <p>Share your experience or read what others have to say!</p>
        <div className="landing-buttons">
          <Link to="/create" className="landing-btn">Submit Testimonial</Link>
          <Link to="/testimonials" className="landing-btn outline">View Testimonials</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
