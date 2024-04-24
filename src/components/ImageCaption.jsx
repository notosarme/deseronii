const ImageCaption = ({ photo }) => {
  const details = [
    photo.date,
    photo.size,
    photo.medium
  ].filter(Boolean); // Filter out undefined or empty strings

  return (
    <div>
      <p className="stroke">&quot;{photo.name || "untitled"}&quot;</p>
      <p className="stroke">{details.join(', ')}</p>
    </div>
  );
};

export default ImageCaption;


// Name
// Date
// Size
// Medium