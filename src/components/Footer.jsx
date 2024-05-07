import { FaInstagram, FaEnvelope } from "react-icons/fa";

//TODO: Clean up

const Footer = () => {
  return (
    <footer>
      <div
        className="canvas-background"
      ></div>
      <div className="gradient-overlay to-top"></div>
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
