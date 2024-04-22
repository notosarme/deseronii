import "./AboutArtist.css";

const AboutArtist = ({aboutText, imageUrl}) => {
  return (
    <div className="aboutContainer">
      <div className="left">
        {aboutText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
      </div>
      <div className="right">
        <img src={imageUrl} alt="artist profile" loading="lazy" />
      </div>
    </div>
  );
};

export default AboutArtist;
