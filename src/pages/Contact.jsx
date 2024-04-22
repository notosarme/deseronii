import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <div className="splitFlexContainer">
        <div className="left" ><ContactDetails /></div>
        <div className="right" ><ContactForm /></div>
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