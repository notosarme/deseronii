import { NavLink } from "react-router-dom";

//TODO: Clean up

const Header = () => {

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
    <header>
      <div className="canvas-background"></div>
      <div className="gradient-overlay to-bottom"></div>
      <nav style={{ position: "relative", zIndex: 2 }}>
      <h1 className="logo">Destiny Nieves</h1>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <NavLink to="/series">
              Series
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
