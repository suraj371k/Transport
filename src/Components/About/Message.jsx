import React from 'react'
import { messageImage } from '../../assets/image'

function Message() {
  return (
    <div className='w-full h-screen bg-[#e5e5e5] flex items-center p-4'>
        <div className='flex flex-col lg:flex-row items-center relative mx-auto space-y-10 lg:space-y-0 lg:space-x-10'>
            {/* Image */}
            <img 
              className='w-[80%] max-w-[300px] md:max-w-[500px] lg:max-w-[600px] mx-auto'
              src={messageImage}
              alt="Message Image"
            />

            {/* Text Content */}
            <div className='bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[20rem] md:max-w-[30rem] lg:max-w-[50rem] mx-auto lg:absolute lg:left-[50%] lg:transform lg:translate-x-20 lg:top-1/3'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#6d6a6a] pb-5 uppercase'>
                    Our Message
                </h1>
                <p className='text-lg md:text-xl pb-5 text-[#868585] font-semibold break-words'>
                    At Wilsonport, we encourage our team to come up with innovative ideas, 
                    strategic ways of thinking, and bigger picture thinking to help our personal
                    and professional growth.
                </p>
                <p className='text-lg md:text-xl font-semibold text-[#868585]'>
                    Our unstoppable commitment to finding comprehensive solutions
                    for your needs has helped us build a next-level force.
                </p>
                <img
                    className='w-[150px] mt-5'
                    src='https://signature.freefire-name.com/img.php?f=2&t=Suraj'
                    alt='signature'
                />
            </div>
        </div>
    </div>
  )
}

export default Message
