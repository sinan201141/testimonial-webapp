const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// ✅ Correct route path
const testimonialRoutes = require("./routes/Testimonials");

// 🔧 Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Root route to avoid 'Cannot GET /' error
app.get("/", (req, res) => {
  res.send("✅ Backend is running smoothly!");
});

// 🧠 MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/testimonialDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🔗 Route setup
app.use("/api/testimonial", testimonialRoutes);

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
