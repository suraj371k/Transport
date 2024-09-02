import React from 'react';

function Join() {
  return (
    <div className='w-full min-h-[50vh] flex flex-col justify-center p-4 mx-auto lg:ml-0 md:ml-0 ml-0'>
      <div className='max-w-[90%] md:max-w-[75%] lg:max-w-[50%] mx-auto'>
        <h1 className='text-2xl md:text-3xl lg:text-[3rem] font-bold text-[#6a6767] uppercase text-center'>
          Wanna Join Us?
        </h1>
        <p className='text-base md:text-lg lg:text-xl font-semibold text-[#747373] mt-4'>
          Come join us! We are looking for logistics experts with the right attitude and someone who can get the job done. If you feel like you can be a great fit, then send us your resume at
          <span className='text-red-600'> admin@wilsonport.online</span>
        </p>
      </div>
    </div>
  );
}

export default Join;
