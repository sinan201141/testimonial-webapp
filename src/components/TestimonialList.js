import React from "react";
import "../TestimonialStyles.css";

const TestimonialList = ({ testimonials }) => {
  return (
    <div className="page-container">
      <div className="card">
        <h2 className="title">Testimonials</h2>
        <div className="testimonial-list">
          {testimonials.length === 0 ? (
            <p>No testimonials yet.</p>
          ) : (
            testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <img
                  src={t.image || "https://via.placeholder.com/60"}
                  alt="Profile"
                />
                <div className="testimonial-content">
                  <h3>{t.name}</h3>
                  <p>{t.message}</p>
                  <span className="rating">Rating: {t.rating}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;