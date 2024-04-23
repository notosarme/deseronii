//between the empty <>, you can edit it like normal HTML.
const ContactDetails = ({socialMedia}) => {
  return (
    <>
    <p>Feel free to leave a message via the form, or get a hold of me below.</p>
    <ul id="sns" className="no-list-style">
      {socialMedia.map((sns, index) => (
        <li key={index}>
          {sns.platform} | <a href={sns.url}>{sns.handle}</a>
        </li>
      ))}
    </ul>
    </>
  );
};

export default ContactDetails;