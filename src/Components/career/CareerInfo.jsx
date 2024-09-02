import React from 'react';
import { careerImage } from '../../assets/image';

function CareerInfo() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 bg-slate-100'>
      <div className='mb-8'>
        <h1 className='uppercase text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-[#757272] text-center py-5'>
          Join Our Team
        </h1>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 items-center w-full max-w-6xl'>
        {/* Image Section */}
        <div className='w-full'>
          <img
            className='w-full h-auto object-cover rounded-lg shadow-md'
            src={careerImage}
            alt='Career'
          />
        </div>

        {/* Text Section */}
        <div className='w-full max-w-lg'>
          <h2 className='uppercase text-xl md:text-2xl lg:text-3xl font-bold text-[#5f5c5c] mb-4'>
            Wanna Work With Us?
          </h2>
          <p className='text-sm md:text-base lg:text-lg text-[#7e7c7c] mb-4'>
            At Wilsonport, you will feel like part of a family and enjoy the many benefits that come with being a part of our team, including great pay for every team member.
          </p>
          <p className='text-sm md:text-base lg:text-lg text-[#7e7c7c]'>
            We are dedicated to taking care of our people and giving them the opportunity they deserve to achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerInfo;
