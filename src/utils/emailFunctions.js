import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_EMAILJS_KEY;

function formatAsFile(string) {
  return string.replace(/\s/g, "-").toLowerCase();
}

function sendEmail(emailKey, emailForum, formRef) {
  emailjs
    .sendForm(emailKey, emailForum, formRef.current, {
      publicKey: publicKey,
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
}

async function postImage(formData) {
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  return response;
}

export { formatAsFile, sendEmail, postImage };