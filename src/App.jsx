// import { useState } from 'react'
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router basename="deseronii">
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/deseronii" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const NotFound = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default App;
