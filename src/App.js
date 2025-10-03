import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SpeakingPractice from "./pages/SpeakingPractice";
import MockTests from "./pages/MockTests";
import AIBandScore from "./pages/AIBandScore";
import FlexibleClasses from "./pages/FlexibleClasses";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speaking" element={<SpeakingPractice />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/ai-band-score" element={<AIBandScore />} />
          <Route path="/flexible-classes" element={<FlexibleClasses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
