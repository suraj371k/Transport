import React from 'react'

function Join() {
  return (
    <div className='w-[50%] h-[50vh] flex flex-col justify-center
    lg:ml-40 md:ml-24 ml-16 flex-wrap'>
         <div>
            <h1 className='text-[3rem] font-bold text-[#6a6767] uppercase'>
                Wanna Join Us?
            </h1>
         </div>
         <div>
            <p className='text-xl font-semibold text-[#747373]'
            >Come join us, we are looking for logistics experts with the right attitude
                 and someone who can get the job done.
            If you feel like you can be a great fit then send us your resume on
            <span className='text-red-600'> admin@wilsonport.online</span> </p>
         </div>
    </div>
  )
}

export default Join