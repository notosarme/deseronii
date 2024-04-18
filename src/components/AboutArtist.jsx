const AboutArtist = () => {

  const contentContainerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  };

  const leftStyle = {
    flex: "1",
    minWidth: "50%",
    order: 1 // Initially, left will come first
  };

  const rightStyle = {
    flex: "1",
    minWidth: "50%",
    order: 2 // Initially, right will come second
  };

  return (
      <div style={contentContainerStyle}>
        <div className="left" style={leftStyle}><p>Text Here</p></div>
        <div className="right" style={rightStyle}><p>An image will go here</p></div>
      </div>
  );
};

export default AboutArtist;
