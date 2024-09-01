import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzpongp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='w-full h-screen bg-[#dbd8d8] grid place-items-center'>
    <form
    className='lg:w-[800px] md:w-[600px] bg-white lg:h-[80vh] grid place-content-center 
    gap-y-5 w-[400px]'
     onSubmit={handleSubmit}>
        <div>
            <h2 className='lg:text-[3rem]  text-[#726f6f] font-bold
           '>Contact us</h2>
        </div>
        <div>
          
            <input
            className='py-5 border-2 p-5 border-[#c1baba] lg:w-[700px] md:w-[500px]
            w-[300px]'
            id='name'
            type='text'
            placeholder='Name'
            required
            name='email'/>
            <ValidationError
            prefix='Name'
            field='text'
            errors={state.errors}
            />
        </div>
       <div>
   
      <input
                  className='py-5 border-2 p-5 border-[#c1baba] lg:w-[700px] md:w-[500px]
                  w-[300px]'
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div>
      <textarea
        className='py-5 border-2 p-5 border-[#c1baba] lg:w-[700px] md:w-[500px] w-[300px]'
        id="message"
        name="message"
        placeholder='Message'
        rows='10'
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div className='pb-5'>
      <button type="submit"
                  className='py-5 p-5 lg:w-[700px] md:w-[500px] w-[300px]
                  bg-red-500 text-white'

       disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
    </div>
  );
}
export default  ContactForm;