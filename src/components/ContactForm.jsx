import { useRef } from "react";
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/emailFunctions';

const ContactForm = () => {
  //TODO: Add submission alert
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const formRef = useRef();
  const emailKey = 'service_rjicbj5';
  const emailForum = 'contact_form';

  const onSubmit = async () => {
    sendEmail(emailKey, emailForum, formRef);
    reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name 
          {errors.user_name && <span className="formErrorMessage">This field is required</span>}
        </label>
        
        <input type="text" id="name" label="name" {...register('user_name', { required: true })} />
      </div>

      <div>
        <label htmlFor="email">Email 
          {errors.user_email && <span className="formErrorMessage">This field is required</span>}
        </label>
        <input type="email" id="email" label='Email' {...register('user_email', { required: true })} />
      </div>
      
      <div>
        <label htmlFor="subject">Subject 
          {errors.subject && <span className="formErrorMessage">This field is required</span>}
        </label>
        
        <input type="text" id="subject" label='Subject' {...register('subject', { required: true })} />
      </div>
      
      <div>
        <label htmlFor="message">Message 
          {errors.message && <span className="formErrorMessage">This field is required</span>}
        </label>
        <textarea label='Message' id="message" {...register('message', { required: true })} />
      </div>
      
      <button className='button' type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
