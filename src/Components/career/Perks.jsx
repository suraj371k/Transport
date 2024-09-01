import React from 'react'
import { FiCoffee } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { AiOutlineInsurance } from "react-icons/ai";

function Perks() {
  return (
    <div className='w-full h-auto lg:h-[70vh] bg-[#d2d0d0] flex flex-col items-center justify-center p-4'>
      <div>
        <h2 className='uppercase text-3xl md:text-4xl font-bold text-[#767373] pb-10 text-center'>
          Our perks
        </h2>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        <div className='bg-white w-full max-w-[400px] text-lg p-7 mx-auto'>
          <div className='py-5 flex'>
            <FiCoffee className='text-[70px] outline-dashed outline-red-700 p-4 text-red-700 rounded-full'/>
          </div>
          <div>
            <p className='text-[#444444] font-semibold '>
              Free delicious food and snacks for everyone
            </p>
          </div>
        </div>
        <div className='bg-white w-full max-w-[400px] text-lg p-5 mx-auto'>
          <div className='py-5 '>
            <FiDollarSign className='text-[70px] outline-dashed outline-red-700 p-4 text-red-700 rounded-full'/>
          </div>
          <div>
            <p className=' text-[#444444] font-semibold'>
            Good pay so you don't have to worry financially
            </p>
          </div>
        </div>
        <div className='bg-white w-full max-w-[400px] text-lg p-5 mx-auto'>
          <div className='py-5 '>
            <CiFaceSmile className='text-[70px] outline-dashed outline-red-700 p-4 text-red-700 rounded-full'/>
          </div>
          <div>
            <p className=' text-[#444444] font-semibold'>
            Only 5 days of working so you are more free
            </p>
          </div>
        </div>
        <div className='bg-white w-full max-w-[400px] text-lg p-5 mx-auto'>
          <div className='py-5 '>
            <AiOutlineInsurance className='text-[70px] outline-dashed outline-red-700 p-4 text-red-700 rounded-full'/>
          </div>
          <div>
            <p className=' text-[#444444] font-semibold'>
              Free delicious food and snacks for everyone
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perks
