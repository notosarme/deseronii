import { FaInstagram, FaEnvelope } from "react-icons/fa";
import canvasImg from "../assets/canvas.jpg";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    background: "#C8AF86",
    listStyleType: "none",
    paddingTop: "2em",
    // borderTop: "1px solid black",
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
                  to top, 
                  rgba(255, 253, 249, 0.6) 50%, 
                  rgba(255, 253, 249, 0.8) 85%, 
                  rgba(255, 253, 249, 1) 100%
                )`,
    zIndex: 5, // Set a higher z-index to place it behind text
  };

  return (
    <footer style={footerStyle}>
      <div
        style={{
          ...backgroundImageStyle,
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      ></div>
      <div style={gradientOverlayStyle}></div>
        <div style={{ fontSize: ".75rem",  zIndex: 99 }}>
          © 2022-2024 Destiny Nieves | Created by{" "}
          <a href="https://github.com/notosarme">notosarmë</a>
        </div>
        <div style={{ fontSize: "1.25rem",  zIndex: 99 }}>
          <a href="https://www.instagram.com/deseronieves/">
            <FaInstagram style={{ marginRight: "1em" }} />
          </a>
          <a href="mailto:deseronii@gmail.com">
            <FaEnvelope />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
