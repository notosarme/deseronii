import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    // maxWidth: "1000px",
    listStyleType: "none",
    borderTop: "1px solid black",
  };


  return (
    <footer style={footerStyle}>
      <div style={{ fontSize: '.75rem'}}>All rights reserved | Created by <a href="https://github.com/notosarme">notosarmë</a></div>
      <div style={{ fontSize: '1.25rem'}} >
        <a href="https://www.instagram.com/deseronieves/">
          <FaInstagram style={{ marginRight: '1em'}} />
        </a>
        <a href="mailto:deseronii@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
