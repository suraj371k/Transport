import React from 'react'
import {  background } from '../../assets/image'
import { CareerInfo ,Join,Perks} from '../../index'

function Career() {
  return (
    <div>
    <div className='relative  h-[80vh] bg-cover overflow-hidden'    
    style={{backgroundImage:`url(${background})`}}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70
       to-transparent'>

          <div className='text-white flex flex-col w-full justify-center
          h-[80vh] px-4 md:px-12 lg:px-20 max-w-full'>

            <h2 className='lg:text-[4rem] md:text-[3.5rem] sm:text-[2rem]
             font-bold tracking-tighter mb-4 uppercase font-serif'>careers</h2>

            <p className='text-xl lg:w-[38vw] break-words'>
            We are a healthy and motivating place to work, and we take this really
             seriously and we solve logistics problems together

           </p>
          </div>
       </div>
       </div>
          <CareerInfo/>
          <Perks/>
          <Join/>
       </div>
  )
}

export default Career