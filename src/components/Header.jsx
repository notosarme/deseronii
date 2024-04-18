import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 className="logo">Destiny Nieves</h1>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}><NavLink end to="/deseronii/" >Home</NavLink></li>
          <li style={navItemStyle}><NavLink to="/deseronii/works" >Works</NavLink></li>
          <li style={navItemStyle}><NavLink to="/deseronii/about" >About</NavLink></li>
          <li style={navItemStyle}><NavLink to="/deseronii/contact" >Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  textAlign: 'center',
  paddingTop: '1rem'
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0',
  listStyleType: 'none',
};

const navItemStyle = {
  flex: '1',
  textAlign: 'center'
};

export default Header;
