import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const publicKey = process.env.EMAILJS_KEY;

  const sendEmail = (formData, e) => {
    e.preventDefault();
    console.log(publicKey);
    emailjs
      .sendForm('service_np2hdth', 'contact_form', e.target, {
        publicKey: publicKey,
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

  const labelStyle = {
    display: 'block',
    margin: '.25em 0'
  }

  const errorMessageStyle = {
    color: 'red', 
    marginLeft: '1rem',
    fontSize: '.85em',
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <div>
        <label style={labelStyle}>Name 
          {errors.user_name && <span style={errorMessageStyle}>This field is required</span>}
        </label>
        
        <input placeholder="Name" type="text" label="name" {...register('user_name', { required: true })} />
      </div>

      <div>
        <label style={labelStyle}>Email 
          {errors.user_email && <span style={errorMessageStyle}>This field is required</span>}
        </label>
        <input type="email" placeholder='Email' label='Email' {...register('user_email', { required: true })} />
      </div>
      
      <div>
        <label style={labelStyle}>Subject 
          {errors.subject && <span style={errorMessageStyle}>This field is required</span>}
        </label>
        
        <input type="text" placeholder='Subject' label='Subject' {...register('subject', { required: true })} />
      </div>
      
      <div>
        <label style={labelStyle}>Message 
          {errors.message && <span style={errorMessageStyle}>This field is required</span>}
        </label>
        <textarea placeholder='Message' label='Message' {...register('message', { required: true })} />
      </div>
      
      <div><input type="submit" value="Send" id="input-button" /></div>
    </form>
  );
};

export default ContactForm;