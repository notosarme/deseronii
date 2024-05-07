import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { formatAsFile, sendEmail, postImage } from "../utils/emailFunctions";
import seriesData from "../data/series";
import FormField from "./FormField";

const UploadImageForm = () => {
  //TODO: Add submission alert
  //TODO: Add folder creation template
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);
  const formRef = useRef();
  const emailKey = "service_np2hdth";
  const emailForum = "upload_form";

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (data) => {

    const formData = new FormData();
    const formDataEntries = [
      ["file", image],
      ["upload_preset", import.meta.env.VITE_CLOUD_PRESET],
      ["folder", data.folder],
      ["public_id", formatAsFile(data.public_id)]
    ];
    formDataEntries.forEach(([key, value]) => formData.append(key, value));

    try {
      let response = await postImage(formData);

      if (response.ok) {
        setImage(null);
        try {
          sendEmail(emailKey, emailForum, formRef);
        } catch (error) {
          console.log(error);
        }
        reset();
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
          {seriesData.map((series, index) => (
            <option key={index} value={series.link}>{series.caption}</option>
          ))}
          <option value="series/vocaloid">Vocaloid</option>
        </select>
      </div>
      <FormField
        id="public_id"
        label="New File Name"
        type="text"
        register={register}
        required={true}
      />
      <FormField
        id="height"
        label="Height"
        type="number"
        register={register}
        required={true}
      />
      <FormField
        id="width"
        label="Width"
        type="number"
        register={register}
        required={true}
      />
      <FormField
        id="name"
        label="Name (optional)"
        type="text"
        register={register}
        required={false}
      />
      <FormField
        id="size"
        label="Size (optional)"
        type="text"
        register={register}
        required={false}
      />
      <FormField
        id="medium"
        label="Medium (optional)"
        type="text"
        register={register}
        required={false}
      />
      <FormField
        id="date"
        label="Date (optional)"
        type="text"
        register={register}
        required={false}
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UploadImageForm;
