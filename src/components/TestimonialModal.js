import React from 'react';
import './TestimonialModal.css'; // Make sure this CSS file is imported

const TestimonialModal = ({ testimonial, onClose }) => {
  if (!testimonial) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Testimonial</h2>
        <p className="modal-message">"{testimonial.message}"</p>
        <p className="modal-name">— {testimonial.name}</p>
        <p className="modal-rating">Rating: {testimonial.rating}</p>
      </div>
    </div>
  );
};

export default TestimonialModal;
