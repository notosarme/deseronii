
import BasicGallery from "../components/BasicGallery";
import seriesImages from "../data/seriesImages";

const SeriesTest = () => {
  const validRoute = seriesImages.find(item => "vocaloid" in item);
  const photos = validRoute ? validRoute.vocaloid : null;
  console.log(photos);
  return (
    <div>
      <h2>Series Test Page</h2>
      <p>Description of a Series</p>
      <p>And then a gallery or something idk.</p>
      <BasicGallery photos={photos} />
    </div>
  );
};

export default SeriesTest;