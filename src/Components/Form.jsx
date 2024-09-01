import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xovarnzp");

  if (state.succeeded) {
    return (
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Thanks!</h1>
        <p className='text-xl'>The form was submitted successfully</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}
     className='max-w-md mx-auto bg-white px-6 py-8 text-center rounded-lg shadow-md'>
      <div className='space-y-4'>
        <div>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='NAME'
            required
            className='w-full py-3 px-4 bg-blue-100 outline-none border-2 border-blue-200 rounded'
          />
          <ValidationError
            prefix='Name'
            field='name'
            errors={state.errors}
          />
        </div>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder='EMAIL'
            required
            className='w-full py-3 px-4 bg-blue-100 outline-none border-2 border-blue-200 rounded'
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div>
          <input
            id='pickup'
            type='text'
            name='pickup'
            placeholder='PICKUP LOCATION'
            required
            className='w-full py-3 px-4 bg-blue-100 outline-none border-2 border-blue-200 rounded'
          />
          <ValidationError
            prefix='Pickup'
            field='pickup'
            errors={state.errors}
          />
        </div>
        <div>
          <input
            id='drop'
            type='text'
            name='drop'
            placeholder='DROP LOCATION'
            required
            className='w-full py-3 px-4 bg-blue-100 outline-none border-2 border-blue-200 rounded'
          />
          <ValidationError
            prefix='Drop'
            field='drop'
            errors={state.errors}
          />
        </div>
        <div>
          <input
            id='budget'
            type='number'
            name='budget'
            placeholder='BUDGET'
            required
            className='w-full py-3 px-4 bg-blue-100 outline-none border-2 border-blue-200 rounded'
          />
          <ValidationError
            prefix='Budget'
            field='budget'
            errors={state.errors}
          />
        </div>
        <div>
          <button className='w-full bg-[#ce4040] py-3 text-white font-bold rounded outline-none'
            type="submit" disabled={state.submitting}>
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
