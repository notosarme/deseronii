import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const UploadImageForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const formRef = useRef();
  
  const publicKey = process.env.EMAILJS_KEY;

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_np2hdth", "upload_form", formRef.current, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          reset();
          console.log("SUCCESS!", response);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  
  

  const onSubmit = async (data) => {
    const formattedPublicId = data.public_id.replace(/\s/g, "-").toLowerCase();

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.CLOUD_PRESET);
    formData.append("folder", data.folder);
    formData.append("public_id", formattedPublicId);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Image uploaded successfully");
        // Reset form fields after successful upload
        setImage(null);
        sendEmail(data);
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          accept="image/*"
          required
        />
      </div>
      <div>
        <label htmlFor="folder">Select Folder:</label>
        <select
          id="folder"
          {...register("folder", { required: true })}
        >
          <option value="">Select Folder</option>
          <option value="gallery">Gallery</option>
          <option value="series/vocaloid">Vocaloid</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="public_id">New File Name:</label>
        <input
          type="text"
          id="public_id"
          {...register("public_id", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          {...register("height", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          {...register("width", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="name">Name <span style={{fontStyle:"italic"}}>(optional)</span>:</label>
        <input
          type="text"
          id="name"
          {...register("name")}
        />
      </div>
      <div>
        <label htmlFor="size">Size <span style={{fontStyle:"italic"}}>(optional)</span>:</label>
        <input
          type="text"
          id="size"
          {...register("size")}
        />
      </div>
      <div>
        <label htmlFor="medium">Medium <span style={{fontStyle:"italic"}}>(optional)</span>:</label>
        <input
          type="text"
          id="medium"
          {...register("medium")}
        />
      </div>
      <div>
        <label htmlFor="date">Date <span style={{fontStyle:"italic"}}>(optional)</span>:</label>
        <input
          type="text"
          id="date"
          {...register("date")}
        />
      </div>
      <button style={{ width: "150px" }} type="submit">
        Submit
      </button>
    </form>
  );
};

export default UploadImageForm;
