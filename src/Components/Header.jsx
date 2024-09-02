import React , {useEffect} from 'react'
import { background } from '../assets/image'
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    window.scroll(0 , 0)
  } , [])
  return (
    <div className='relative w-full h-[95vh] bg-cover z-0'    
      style={{backgroundImage:`url(${background})`}}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent'>
        <div className='w-[90vw] md:w-[70vw] lg:w-[50vw] flex justify-center flex-col h-full ml-4 md:ml-20 lg:ml-40 gap-6'>
          <h1 className='text-white text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold leading-tight'>
            Your Ultimate Trucking And Warehousing Services
          </h1>
          <p className='text-white text-lg md:text-xl lg:text-2xl w-full md:w-[60vw] lg:w-[40vw]'>
            Here at Wilsonport we pride ourselves in being known for our quality services. 
            Your satisfaction and happiness is our number one priority all the time.
          </p>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5'>
          <Link to='/contact'>
  <button className='px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-bold py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-6 text-white bg-[#f31b1b]'>
    GET IN TOUCH
  </button>
</Link>

<Link to='/about'>
  <button className='border-2 border-white px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-bold py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-6 text-white'>
    ABOUT US
  </button>
</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
