import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  //fill in or adjust this object to add or update social media
  const socialMedia = [
    { platform: 'Instagram', url: 'https://www.instagram.com/deseronieves/', handle: '@deseronieves' },
    { platform: 'Email', url: 'mailto:deseronii@gmail.com', handle: 'deseronii@gmail.com' },
  ]

  return (
    <div>
      <h2>Contact</h2>
      <div className="splitFlexContainer">
        <div className="left" ><ContactDetails socialMedia={socialMedia} /></div>
        <div className="right" ><ContactForm /></div>
      </div>
    </div>
  );
};

export default Contact;