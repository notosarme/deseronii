import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
    //TODO: Change this to firebase auth
    fetch('/api/isLoggedIn')
      .then(response => {
        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(error => {
        console.error('Error checking authentication status:', error);
      });
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
            <Route path="/login" element={isLoggedIn ? <Navigate replace to="/admin" /> : <Login />} />
            <Route path="/admin" element={isLoggedIn ? <Admin /> : <Navigate replace to="/login" />} />
            <Route path="*" element={<NotFound />} />
            <Route path="series/vocaloid" element={<Vocaloid />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
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
