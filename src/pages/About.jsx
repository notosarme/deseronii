import AboutArtist from "../components/AboutArtist";
import PDFViewer from "../components/PDFViewer";

const About = () => {
  //Each section in quotes, separated with a comma, will be a new paragraph in the Left section.
  const aboutText = [
    `Your custom paragraph text goes here.`,

    `Things people mention in their about pages: name, birth year, location, muse, favourite subject, mediums, graduated from, things participated in (exhibitions, galleries, publications, events), awards, publicity, meaning in work, recent news, examines X in work, influences`,
    
    `And yet another one!`
  ];

  //For the image, replace assets/PROFILE_IMG.jpg with the same name.
  //For the PDF, replace assets/ARTIST_CV.pdf with the same name.

  return (
    <div>
      <h2>About</h2>
      <AboutArtist aboutText={aboutText} />
      <PDFViewer />
    </div>
  );
};

export default About;
