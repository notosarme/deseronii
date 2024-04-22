import AboutArtist from "../components/AboutArtist";
import PDFViewer from "../components/PDFViewer";

const About = () => {
  //Each section in quotes, separated with a comma, will be a new paragraph in the Left section.
  const aboutText = [
    `Your custom paragraph text goes here.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec ornare neque in nulla luctus, ut congue elit rutrum. 
    Morbi vitae lectus eu ex bibendum dapibus et nec enim. 
    Pellentesque quis diam pharetra, sodales leo a, malesuada dui. 
    Integer gravida vitae tortor blandit pharetra. 
    Ut malesuada mattis scelerisque. 
    Aenean urna quam, vehicula id ultricies a, consequat at risus. 
    Proin luctus finibus eros vitae congue. 
    Mauris ac malesuada magna. Nam eu augue dolor. 
    Curabitur ac est tempor enim blandit imperdiet sit amet vitae neque.`,
    `And yet another one!`
  ];

  //This is the right profile image. It can be a hyperlink or a link to an asset.
  const imageUrl = "https://picsum.photos/500/600"; 

  //For the PDF, just replace assets/ARTIST_CV.pdf with the same name.

  return (
    <div>
      <h2>About Us</h2>
      <AboutArtist aboutText={aboutText} imageUrl={imageUrl} />
      <PDFViewer />
    </div>
  );
};

export default About;
