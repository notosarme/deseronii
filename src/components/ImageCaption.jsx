const ImageCaption = ({ photo }) => {
  const details = [
    photo.date || 'Untitled',
    photo.size,
    photo.medium
  ].filter(Boolean); // Filter out undefined or empty strings

  return (
    <div>
      <p className="stroke">&quot;{details.join(', ')}&quot;</p>
    </div>
  );
};

export default ImageCaption;


// Name
// Date
// Size
// Medium