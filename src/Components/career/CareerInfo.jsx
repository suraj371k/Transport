import React from 'react'
import { careerImage } from '../../assets/image'

function CareerInfo() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div>
           <h1 className='uppercase text-[3rem] font-bold font-serif text-[#757272]
           py-5'>join our team</h1>
        </div>
        <div className='grid lg:grid-cols-2 place-items-center grid-cols-1'>
        <div className='w-full'>
  <img className='w-full max-w-[800px] md:max-w-[600px] sm:max-w-[400px]' src={careerImage} alt='Career'/>
</div>

            <div className='w-[35rem]'>

               <h2 className='uppercase text-[2rem] font-bold text-[#5f5c5c]'>
                Wanna Work With Us?</h2>

               <p className='text-xl text-[#7e7c7c]'>At Wilsonport, you will feel like part of a family and enjoy the
                 many benefits that come with being a part of our team including great pay
                  for every team member.</p>

                  <p className='text-xl text-[#7e7c7c]'>We are dedicated to taking care of our people and giving them the
                     opportunity they deserve to achieve their goals.
                  </p>
            </div>
        </div>
    </div>
  )
}

export default CareerInfo