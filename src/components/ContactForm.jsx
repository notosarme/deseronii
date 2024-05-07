import { useRef } from "react";

import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/emailFunctions';
import "./ContactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const formRef = useRef();
  const emailKey = 'service_rjicbj5';
  const emailForum = 'contact_form';

  const onSubmit = async () => {
    sendEmail(emailKey, emailForum, formRef);
    reset();
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
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
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
      
      <button className='button' type="submit">
        Submit
      </button>
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