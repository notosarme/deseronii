import { useState } from 'react';
import emailjs from '@emailjs/browser';

const UploadImageForm = () => {
  
const publicKey = process.env.EMAILJS_KEY;

const [image, setImage] = useState(null);
const [folder, setFolder] = useState('');
const [publicId, setPublicId] = useState('');
const [height, setHeight] = useState('');
const [width, setWidth] = useState('');
const [name, setName] = useState('');
const [size, setSize] = useState('');
const [medium, setMedium] = useState('');
const [date, setDate] = useState('');

const handleImageChange = (e) => {
  setImage(e.target.files[0]);
};

const handleFolderChange = (e) => {
  setFolder(e.target.value);
};

const handlePublicIdChange = (e) => {
  setPublicId(e.target.value);
};

const handleHeightChange = (e) => {
  setHeight(e.target.value);
};

const handleWidthChange = (e) => {
  setWidth(e.target.value);
};

const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleSizeChange = (e) => {
  setSize(e.target.value);
};

const handleMediumChange = (e) => {
  setMedium(e.target.value);
};

const handleDateChange = (e) => {
  setDate(e.target.value);
};

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_np2hdth', 'upload_form', e.target, {
      publicKey: publicKey,
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};


const handleSubmit = async (e) => {
  e.preventDefault();
  const formattedPublicId = publicId.replace(/\s/g, "-").toLowerCase();

  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', process.env.CLOUD_PRESET); 
  formData.append('folder', folder);
  formData.append('public_id', formattedPublicId);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Image uploaded successfully');
      // Reset form fields after successful upload
      setImage(null);
      setFolder('');
      setPublicId('');
      sendEmail(e);
    } else {
      console.error('Failed to upload image');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

return (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="image">Upload Image:</label>
      <input type="file" id="image" onChange={handleImageChange} accept="image/*" required />
    </div>
    <div>
      <label htmlFor="folder">Select Folder:</label>
      <select id="folder" value={folder} onChange={handleFolderChange} required>
        <option value="">Select Folder</option>
        <option value="gallery">Gallery</option>
        <option value="series/vocaloid">Vocaloid</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <div>
      <label htmlFor="publicId">Enter Public ID:</label>
      <input type="text" id="publicId" value={publicId} onChange={handlePublicIdChange} required />
    </div>
    <div>
      <label htmlFor="height">Height:</label>
      <input type="number" id="height" value={height} onChange={handleHeightChange} required />
    </div>
    <div>
      <label htmlFor="width">Width:</label>
      <input type="number" id="width" value={width} onChange={handleWidthChange} required />
    </div>
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} required />
    </div>
    <div>
      <label htmlFor="size">Size:</label>
      <input type="text" id="size" value={size} onChange={handleSizeChange} required />
    </div>
    <div>
      <label htmlFor="medium">Medium:</label>
      <input type="text" id="medium" value={medium} onChange={handleMediumChange} required />
    </div>
    <div>
      <label htmlFor="date">Date:</label>
      <input type="text" id="date" value={date} onChange={handleDateChange} required />
    </div>
    <button style={{width: "150px"}} type="submit">Submit</button>
  </form>
);
};

export default UploadImageForm