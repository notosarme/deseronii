const ImageCaption = ({ photo }) => {
  return (
    <div>
      <p className="stroke">&quot;{photo.name || 'Untitled'}&quot;</p>
      <p className="stroke">
        {photo.date && <>{photo.date}, </>}
        {photo.size && <>{photo.size}, </>}
        {photo.medium && photo.medium}
      </p>
    </div>
  );
};

export default ImageCaption;

// Name
// Date
// Size
// Medium