import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateTestimonial from "./pages/CreateTestimonial";
import ViewTestimonials from "./pages/ViewTestimonials";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateTestimonial />} />
          <Route path="/testimonials" element={<ViewTestimonials />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;