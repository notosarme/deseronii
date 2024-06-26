import PDFViewer from "../components/PDFViewer";
import profileImg from "../assets/PROFILE_IMG.jpg";
import pdfFile from "../assets/ARTIST_CV.pdf"

const About = () => {
  //Each section in quotes, separated with a comma, will be a new paragraph in the Left section.
  const aboutText = [
    `Your custom paragraph text goes here.`,

    `Things people mention in their about pages: name, birth year, location, muse, favourite subject, mediums, graduated from, things participated in (exhibitions, galleries, publications, events), awards, publicity, meaning in work, recent news, examines X in work, influences`,
    
    `And yet another one!`
  ];

  //For the image, replace assets/PROFILE_IMG.jpg with the same name.
  //For the PDF, replace assets/ARTIST_CV.pdf with the same name.

  return (
    <div>
      <h2>About</h2>
      <AboutArtist aboutText={aboutText} />
      <PDFViewer />
    </div>
  );
};

const AboutArtist = ({aboutText}) => {
  return (
    <div className="splitFlexContainer">
      <div className="left">
        {aboutText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        <p><a href={pdfFile} className="dark-button">Download CV</a></p>
      </div>
      <div className="right">
        <img style={{maxHeight:"450px", border:"2px solid black", maxWidth: "100%"}} src={profileImg} alt="artist profile" loading="lazy" />
      </div>
    </div>
  );
};

export default About;
