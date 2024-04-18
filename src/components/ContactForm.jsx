import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const sendEmail = (formData, e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_np2hdth', 'contact_form', e.target, {
        publicKey: '3DkRWHRxUSxEht_bQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <label>Name</label>
      <input type="text" {...register('user_name', { required: true })} />
      {errors.user_name && <span>This field is required</span>}
      
      <label>Email</label>
      <input type="email" {...register('user_email', { required: true })} />
      {errors.user_email && <span>This field is required</span>}
      
      <label>Subject</label>
      <input type="text" {...register('subject', { required: true })} />
      {errors.subject && <span>This field is required</span>}
      
      <label>Message</label>
      <textarea {...register('message', { required: true })} />
      {errors.message && <span>This field is required</span>}
      
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;