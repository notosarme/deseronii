import "./AboutArtist.css";
import profileImg from "../assets/PROFILE_IMG.jpg";
import pdfFile from "../assets/ARTIST_CV.pdf"

const AboutArtist = ({aboutText}) => {
  return (
    <div className="splitFlexContainer">
      <div className="left">
        {aboutText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        <p><a href={pdfFile}>Download CV</a></p>
      </div>
      <div className="right">
        <img src={profileImg} alt="artist profile" loading="lazy" />
      </div>
    </div>
  );
};

export default AboutArtist;
