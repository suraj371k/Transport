import React from 'react'
import { logo } from '../assets/image'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Bottom() {
  return (
    <div className='w-full h-auto'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center w-full h-auto bg-[#e8e7e7] py-10'>
        <div className='text-center md:text-left'>
          <h3 className='text-lg md:text-2xl font-extrabold text-[#6c6a6a]'>COMPANY</h3>
          <ul className='text-[#646262] text-sm md:text-xl font-semibold py-4'>
            <li className='py-1 md:py-2 lg:py-4'>Home</li>
            <li className='py-1 md:py-2 lg:py-4'>About</li>
            <li className='py-1 md:py-2 lg:py-4'>Career</li>
            <li className='py-1 md:py-2 lg:py-4'>Contact</li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <h3 className='text-lg md:text-2xl font-extrabold text-[#6c6a6a]'>OPEN HOUR</h3>
          <ul className='text-[#646262] text-sm md:text-xl font-semibold py-4'>
            <li className='py-1 md:py-2 lg:py-4'>Monday 11am-7pm</li>
            <li className='py-1 md:py-2 lg:py-4'>Tuesday 11am-8pm</li>
            <li className='py-1 md:py-2 lg:py-4'>Wednesday 10am-6pm</li>
            <li className='py-1 md:py-2 lg:py-4'>Sunday 11am-6pm</li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <h3 className='text-lg md:text-2xl font-extrabold text-[#6c6a6a]'>RESOURCES</h3>
          <ul className='text-[#646262] text-sm md:text-xl font-semibold py-4'>
            <li className='py-1 md:py-2 lg:py-4'>Request Quote</li>
            <li className='py-1 md:py-2 lg:py-4'>Our Services</li>
            <li className='py-1 md:py-2 lg:py-4'>Our Gallery</li>
            <li className='py-1 md:py-2 lg:py-4'>Client Review</li>
          </ul>
        </div>
        <div className='text-center md:text-left'>
          <img src={logo} className='w-32 md:w-40 lg:w-48 mx-auto md:mx-0 py-6'/>
          <p className='w-[50vw] md:w-[30vw] lg:w-[20vw]  md:mx-0 text-sm md:text-xl 
          font-semibold text-[#6c6a6a]'>
            Wilsonport is Ireland’s leading and best provider of transportation,
            warehousing and logistics services
          </p>
          <div className='flex justify-center md:justify-start gap-x-4 md:gap-x-5 py-10 flex-wrap'>
            <a className='bg-red-500 rounded-full p-2 md:p-3 text-white' href=''><FaFacebookF className='text-xl md:text-2xl'/></a>
            <a className='bg-red-500 rounded-full p-2 md:p-3 text-white' href=''><FaInstagram className='text-xl md:text-2xl'/></a>
            <a className='bg-red-500 rounded-full p-2 md:p-3 text-white' href=''><FaTwitter className='text-xl md:text-2xl'/></a>
            <a className='bg-red-500 rounded-full p-2 md:p-3 text-white' href=''><FaYoutube className='text-xl md:text-2xl'/></a>
            <a className='bg-red-500 rounded-full p-2 md:p-3 text-white' href=''><FaLinkedin className='text-xl md:text-2xl'/></a>
          </div>
        </div>
      </div>
      <div className='text-center mt-10 px-4'>
        <p className='text-sm md:text-base'>Copyright © 2024 All rights reserved | Website developed by 
          <span><a href='https://portfolio-2-neon-mu.vercel.app/' target='_blank' 
          className='font-bold text-blue-500'> Suraj Kushwaha</a></span>
        </p>
      </div>
    </div>
  )
}

export default Bottom;
