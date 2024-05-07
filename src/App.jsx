import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "../api/firebase";
import { onAuthStateChanged } from "firebase/auth";

import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Series from "./pages/Series";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import Vocaloid from "./pages/series/Vocaloid";
import Login from "./pages/Login";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return userStatus;
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route>
            <Route index element={<Navigate replace to="/series" />} />
            <Route path="/" element={<Navigate replace to="/series" />} />
            <Route path="series" element={<Series />} />
            <Route path="works" element={<Works />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {isLoggedIn ? (
              <>
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Navigate replace to="/admin" />} />
              </>
            ) : (
              <>
                <Route path="/admin" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
              </>
            )}
            <Route path="*" element={<NotFound />} />
            <Route path="series/vocaloid" element={<Vocaloid />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
