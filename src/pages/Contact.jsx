import ContactForm from "../components/ContactForm";

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

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <div style={contentContainerStyle}>
        <div className="left" style={leftStyle}><ContactDetails /></div>
        <div className="right" style={rightStyle}><ContactForm /></div>
      </div>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <>
    <p>Feel free to leave a message via the form, or get a hold of me below.</p>
    <p>Instagram | @xxxxxxx</p>
    <p>Instagram | @xxxxxxx</p>
    <p>Instagram | @xxxxxxx</p>
    </>
  );
};

export default Contact;