import "./AboutArtist.css";
import profileImg from "../assets/PROFILE_IMG.jpg";

const AboutArtist = ({aboutText}) => {
  return (
    <div className="splitFlexContainer">
      <div className="left">
        {aboutText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
      </div>
      <div className="right">
        <img src={profileImg} alt="artist profile" loading="lazy" />
      </div>
    </div>
  );
};

export default AboutArtist;
