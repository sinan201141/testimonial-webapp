import React, { useEffect, useState } from "react";
import axios from "axios";
import TestimonialList from "../components/TestimonialList";

const ViewTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/testimonial");
      setTestimonials(res.data);
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter testimonials
  const filteredTestimonials = testimonials.filter((t) =>
    t.name.toLowerCase().includes(searchTerm) ||
    t.message.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search testimonials..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "400px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
      </div>

      <TestimonialList testimonials={filteredTestimonials} />
    </div>
  );
};

export default ViewTestimonials;
