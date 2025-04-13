import React, { useState } from "react";
import axios from "axios";
import "../TestimonialStyles.css";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/testimonial", formData);
      alert("Testimonial submitted!");
      setFormData({ name: "", message: "", rating: "", image: "" });
    } catch (err) {
      console.error("Error submitting testimonial:", err);
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2 className="title">Submit Your Testimonial</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input
            id="rating"
            placeholder="Rating (1-5)"
            type="number"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
          />
          <input
            id="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm;