import BasicGallery from "../components/BasicGallery";
import photos from "../data/photos";

const Works = () => {
  return (
    <div>
      <h2>Works</h2>
      <BasicGallery photos={photos} />
    </div>
  );
};

export default Works;