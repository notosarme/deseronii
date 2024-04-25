import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const publicKey = process.env.EMAILJS_KEY;

  const sendEmail = (_, e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_rjicbj5', 'contact_form', e.target, {
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
        
        <input type="text" label="name" {...register('user_name', { required: true })} />
      </div>

      <div>
        <label style={labelStyle}>Email 
          {errors.user_email && <span style={errorMessageStyle}>This field is required</span>}
        </label>
        <input type="email" label='Email' {...register('user_email', { required: true })} />
      </div>
      
      <div>
        <label style={labelStyle}>Subject 
          {errors.subject && <span style={errorMessageStyle}>This field is required</span>}
        </label>
        
        <input type="text" label='Subject' {...register('subject', { required: true })} />
      </div>
      
      <div>
        <label style={labelStyle}>Message 
          {errors.message && <span style={errorMessageStyle}>This field is required</span>}
        </label>
        <textarea label='Message' {...register('message', { required: true })} />
      </div>
      
      <div><input type="submit" value="Send" className="button" /></div>
    </form>
  );
};

export default ContactForm;

// const SubjectDropdown = () => {
//   <div>
//         <label style={labelStyle}>Subject 
//           {errors.subject && <span style={errorMessageStyle}>This field is required</span>}
//         </label>
//         <select {...register('subject', { required: true })}>
//           <option value="">Select a Subject</option>
//           <option value="Website Commission Request">I want to commission you!</option>
//           <option value="Website Question">I have a question for you!</option>
//           <option value="Website Statement">I have something to say!</option>
//         </select>
//       </div>
// }