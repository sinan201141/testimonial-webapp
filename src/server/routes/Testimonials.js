const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Schema
const testimonialSchema = new mongoose.Schema({
  name: String,
  message: String,
  rating: Number,
  image: String,
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// POST
router.post("/", async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: "Failed to submit testimonial", error });
  }
});

// GET
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials", error });
  }
});

module.exports = router;
