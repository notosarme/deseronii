import AboutArtist from "../components/AboutArtist";
import PDFViewer from "../components/PDFViewer";

const About = () => {

  const aboutStyle = {
    // display: "flex",
    // flexDirection: "column",
    backgroundColor: "lime"
  };
  
  return (
    <div style={aboutStyle}>
      <h2>About Us</h2>
      <AboutArtist />
      <PDFViewer />
    </div>
  );
};

export default About;
