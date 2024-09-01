import React from 'react'
import { map } from '../assets/image'
import FooterData from './FooterData'
import Bottom from './Bottom'

function Footer() {
  return (
    <div className='font-sans'>
      <div
        className='w-full h-auto bg-cover bg-center'
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className='bg-red-500 w-[90vw] md:w-[70vw] lg:w-[50vw] h-auto min-h-[40vh] md:min-h-[50vh] lg:min-h-[70vh] mx-auto flex flex-col justify-center items-center p-6 md:p-10'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center'>
            FIND US
          </h2>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 py-8'>
            {FooterData.map((item) => (
              <div key={item.id} className='p-4 text-center md:text-left'>
                <h2 className='text-2xl md:text-3xl font-bold text-white'>{item.heading}</h2>
                <div className='text-lg md:text-xl text-white mt-2'>
                  <p>{item.para1}</p>
                  <p>{item.para2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  )
}

export default Footer;
