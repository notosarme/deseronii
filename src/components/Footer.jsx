import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    // maxWidth: "1000px",
    margin: "0 auto",
    padding: "1em 2em 0",
    listStyleType: "none",
    borderTop: "1px solid black"
  };


  return (
    <footer style={footerStyle}>
      <div >All rights reserved</div>
      <div >
        <a href="https://www.instagram.com/deseronieves/">
          <FaInstagram style={{ marginRight: '1em' }} />
        </a>
        <a href="mailto:deseronii@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
