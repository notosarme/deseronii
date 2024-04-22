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

//between the empty <>, you can edit it like normal HTML.
const ContactDetails = () => {
  return (
    <>
    <p>Feel free to leave a message via the form, or get a hold of me below.</p>
    <ul id="sns" className="no-list-style">
      <li>Instagram | <a href="https://www.instagram.com/deseronieves/">@deseronieves</a></li>
    </ul>
    </>
  );
};

export default Contact;