import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_EMAILJS_KEY;

function sendEmail(emailKey, emailForum, formRef) {
  console.log("formRef:", formRef); // Log formRef to see what it contains

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

export { sendEmail };