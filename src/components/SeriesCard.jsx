
const SeriesCard = ({ imageUrl, caption, link }) => {
  return (
    <div className="series-card">
      <a href={link}>
        <img src={imageUrl} alt={caption} />
        <div className="caption">{caption}</div>
      </a>
    </div>
  );
}

export default SeriesCard