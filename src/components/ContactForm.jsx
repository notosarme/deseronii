import { useRef } from "react";
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/emailFunctions';

const ContactForm = () => {
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
        <label>Name 
          {errors.user_name && <span className="formErrorMessage">This field is required</span>}
        </label>
        
        <input type="text" label="name" {...register('user_name', { required: true })} />
      </div>

      <div>
        <label>Email 
          {errors.user_email && <span className="formErrorMessage">This field is required</span>}
        </label>
        <input type="email" label='Email' {...register('user_email', { required: true })} />
      </div>
      
      <div>
        <label>Subject 
          {errors.subject && <span className="formErrorMessage">This field is required</span>}
        </label>
        
        <input type="text" label='Subject' {...register('subject', { required: true })} />
      </div>
      
      <div>
        <label>Message 
          {errors.message && <span className="formErrorMessage">This field is required</span>}
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
//         <label>Subject 
//           {errors.subject && <span className="formErrorMessage">This field is required</span>}
//         </label>
//         <select {...register('subject', { required: true })}>
//           <option value="">Select a Subject</option>
//           <option value="Website Commission Request">I want to commission you!</option>
//           <option value="Website Question">I have a question for you!</option>
//           <option value="Website Statement">I have something to say!</option>
//         </select>
//       </div>
// }