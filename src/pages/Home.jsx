import SeriesCard from "../components/SeriesCard";
import seriesData from "../data/series";

const Home = () => {
  return (
    <>
    <h2>Series</h2>
    <div className="grid-container">
    {seriesData.map((data, index) => (
        <div className="grid-item" key={index}>
          <SeriesCard
            imageUrl={data.imageUrl}
            caption={data.caption}
            link={data.link}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;
