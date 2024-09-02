import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzpongp");
  if (state.succeeded) {
    return <p className="text-center text-xl">Thanks for joining!</p>;
  }
  return (
    <div className='min-w-full min-h-screen bg-[#dbd8d8] flex items-center justify-center py-10 px-4'>
      <form
        className='w-full max-w-[800px] bg-white p-8 md:p-10 rounded-lg shadow-lg grid gap-y-5'
        onSubmit={handleSubmit}
      >
        <div>
          <h2 className='text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#726f6f] font-bold text-center'>
            Contact us
          </h2>
        </div>
        <div>
          <input
            className='w-full py-3 md:py-4 lg:py-5 px-4 border-2 border-[#c1baba] rounded-md'
            id='name'
            type='text'
            placeholder='Name'
            required
            name='text'
          />
          <ValidationError prefix='Name' field='text' errors={state.errors} />
        </div>
        <div>
          <input
            className='w-full py-3 md:py-4 lg:py-5 px-4 border-2 border-[#c1baba] rounded-md'
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div>
          <textarea
            className='w-full py-3 md:py-4 lg:py-5 px-4 border-2 border-[#c1baba] rounded-md'
            id='message'
            name='message'
            placeholder='Message'
            rows='6'
            required
          />
          <ValidationError prefix='Message' field='message' errors={state.errors} />
        </div>
        <div>
          <button
            type='submit'
            className='w-full py-3 md:py-4 lg:py-5 bg-red-500 text-white font-semibold rounded-md'
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
