import React from 'react';
import { IoMdHappy } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { LuTruck } from "react-icons/lu";
import { GoPackage } from "react-icons/go";

function Stats() {
  return (
    <div className='w-full h-[70vh] bg-slate-200 flex flex-col items-center py-10 sm:mt-40'>
      <div className='mb-10'>
        <h2 className='text-3xl font-bold text-[#6e6c6c] text-center'>OUR STATS</h2>
      </div>
      <div className='grid lg:grid-cols-4 lg:gap-x-4 md:grid-cols-2 grid-cols-2
      md:gap-5 sm:gap-5'>
        <div className='w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-md
         h-auto bg-white shadow-md flex flex-col justify-center items-center p-6'>
          
          <GoPackage className='text-5xl text-red-600' />
          <h2 className='text-3xl font-bold text-[#5f5e5e] mt-4'>7000+</h2>
          <p className='text-xl font-semibold text-[#727070] mt-2'>Packages Stored</p>
        </div>
        <div className='w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-md h-auto bg-white shadow-md flex flex-col justify-center items-center p-6'>
          <IoMdHappy className='text-5xl text-red-600' />
          <h2 className='text-3xl font-bold text-[#5f5e5e] mt-4'>800+</h2>
          <p className='text-xl font-semibold text-[#727070] mt-2'>Happy Clients</p>
        </div>
        <div className='w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-md h-auto bg-white shadow-md flex flex-col justify-center items-center p-6'>
          <LuTruck className='text-5xl text-red-600' />
          <h2 className='text-3xl font-bold text-[#5f5e5e] mt-4'>3000+</h2>
          <p className='text-xl font-semibold text-[#727070] mt-2'>Deliveries Completed</p>
        </div>
        <div className='w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-xs xl:max-w-md h-auto bg-white shadow-md flex flex-col justify-center items-center p-6'>
          <TbWorld className='text-5xl text-red-600' />
          <h2 className='text-3xl font-bold text-[#5f5e5e] mt-4'>2000+</h2>
          <p className='text-xl font-semibold text-[#727070] mt-2'>Miles Travelled</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
