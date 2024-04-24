import { useState } from "react";

const Admin = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [aspectRatio, setAspectRatio] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const ratio = img.width / img.height;
        setAspectRatio(ratio.toFixed(2)); // round ratio to 2 decimal places
      };
      img.src = e.target.result;
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%' }} />}
      {aspectRatio && <p>Aspect Ratio: {aspectRatio}</p>}
    </div>
  );
};

export default Admin;