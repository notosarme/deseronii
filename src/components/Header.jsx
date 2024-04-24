import { NavLink } from "react-router-dom";
import canvasImg from "../assets/canvas.jpg"

const Header = () => {
  const headerStyle = {
    textAlign: "center",
    position: "relative",
    background: "#C8AF86",
    paddingBottom: "2em",
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${canvasImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const gradientOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(
      to bottom, 
      rgba(255, 253, 249, 0.6) 50%, 
      rgba(255, 253, 249, 0.8) 85%, 
      rgba(255, 253, 249, 1) 100%
    )`,
    zIndex: 1, // Set a higher z-index to place it behind text
  };

  const navListStyle = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0",
    listStyleType: "none",
  };

  const navItemStyle = {
    flex: "1",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <div style={{ ...backgroundImageStyle, position: "absolute", zIndex: 0, width: "100%", height: "100%", top: 0, left: 0 }}></div>
      <div style={gradientOverlayStyle}></div>
      <nav style={{ position: "relative", zIndex: 2 }}>
      <h1 className="logo">Destiny Nieves</h1>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          <li style={navItemStyle}>
            <NavLink to="/works">Works</NavLink>
          </li>
          <li style={navItemStyle}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li style={navItemStyle}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
