import BasicGallery from "../../components/BasicGallery";
import seriesImages from "../../data/seriesImages";

const Vocaloid = () => {
  const validRoute = seriesImages.find(item => "vocaloid" in item);
  const photos = validRoute ? validRoute.vocaloid : null;

  return (
    <div>
      <h2>Vocaloid</h2>
      <p>Description of a Series</p>
      <p>And then a gallery or something idk.</p>
      <BasicGallery photos={photos} />
    </div>
  );
  
};

export default Vocaloid