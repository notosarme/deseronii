import { Link } from "react-router-dom";

const SeriesCard = ({ imageUrl, caption, link }) => {
  return (
    <Link to={link}>
      <div className="series-card">
        <img src={imageUrl} alt={caption} />
        <div className="caption">{caption}</div>
      </div>
    </Link>
  );
};

export default SeriesCard;
