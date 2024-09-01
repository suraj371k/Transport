import React from 'react'
import { trucking } from '../assets/image'
import Form from './Form';

function Quote() {
  return (
    <div className='w-full h-screen bg-cover relative'
      style={{ backgroundImage: `url(${trucking})` }}>
      <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-[white]/70 via-[white]/70 to-[white]/70 flex justify-center items-center'>
        <div className='flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 py-8 gap-10 md:gap-20'>
          <div className='flex-1 space-y-6'>
            <h1 className='text-3xl md:text-4xl text-[#5a5757] font-bold'>
              REQUEST A QUOTE
            </h1>
            <p className='text-xl md:text-2xl text-[#525151]'>
              Fill the quota form by providing the details and we will get back to you 
              with answers as soon as possible.
            </p>
            <ul className='list-disc text-xl md:text-2xl font-semibold text-[#525151] ml-5'>
              <li>Great Customer Support</li>
              <li>Fast Response</li>
              <li>Active Everyday</li>
            </ul>
          </div>
          <div className='flex-1'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote;
