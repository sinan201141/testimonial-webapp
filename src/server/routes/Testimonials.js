const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Schema
const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  profilePic: {
    type: String, // Expecting a URL
    default: "",  // Optional default
  },
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// POST
router.post("/", async (req, res) => {
  try {
    const { name, message, rating, profilePic } = req.body;

    const newTestimonial = new Testimonial({
      name,
      message,
      rating,
      profilePic,
    });

    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    console.error("❌ Error submitting testimonial:", error);
    res.status(400).json({ message: "Failed to submit testimonial", error });
  }
});

// GET
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ _id: -1 }); // optional: show newest first
    res.status(200).json(testimonials);
  } catch (error) {
    console.error("❌ Error fetching testimonials:", error);
    res.status(500).json({ message: "Failed to fetch testimonials", error });
  }
});

module.exports = router;
