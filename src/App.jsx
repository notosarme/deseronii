// import { useState } from 'react'
import "./App.css";

// import { BrowserRouter as Route, Routes } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="works" element={<Works />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
//change HashRouter to BrowserRouter for proper deployment
//<Router basename="deseronii">

const NotFound = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default App;
