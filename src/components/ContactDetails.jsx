const ContactDetails = ({ socialMedia }) => {
  return (
    <ul id="sns" className="no-list-style">
      {socialMedia.map((sns, index) => (
        <li key={index}>
          {sns.platform} | <a href={sns.url}>{sns.handle}</a>
        </li>
      ))}
    </ul>
  );
};

export default ContactDetails;
