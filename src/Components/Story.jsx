import React from 'react';
import { bonded, commercial, container, trucking, high } from '../assets/image';
import { Link } from 'react-router-dom';

function Story() {
  return (
    <div className='relative bg-[#FAF9F6] w-full min-h-screen'>

      <div className='relative bg-white p-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 lg:px-32 py-10'>
          <div className='shadow-md p-5 flex flex-col items-center text-center'>
            <img src={trucking} alt="Trucking" className='w-full mb-4'/>
            <h2 className='font-extrabold text-xl text-[#545252] mb-2'>TRUCKING</h2>
            <p className='text-[#908e8e] font-bold'>
              With multiple trucks servicing in entire Ireland, we are capable of handling your trucking needs.
            </p>
          </div>

          <div className='shadow-md p-5 flex flex-col items-center text-center'>
            <img src={container} alt="Warehousing" className='w-full mb-4'/>
            <h2 className='font-extrabold text-xl text-[#545252] mb-2'>WAREHOUSING</h2>
            <p className='text-[#908e8e] font-bold'>
              We have warehousing facilities available for long or short term storage needs.
            </p>
          </div>

          <div className='shadow-md p-5 flex flex-col items-center text-center'>
            <img src={bonded} alt="Bonded CFS" className='w-full mb-4'/>
            <h2 className='font-extrabold text-xl text-[#545252] mb-2'>BONDED CFS</h2>
            <p className='text-[#908e8e] font-bold'>
              Let us transfer your Air freight to our custom's bonded facility and will make it ready to go.
            </p>
          </div>

          <div className='shadow-md p-5 flex flex-col items-center text-center'>
            <img src={commercial} alt="Commercial" className='w-full mb-4'/>
            <h2 className='font-extrabold text-xl text-[#545252] mb-2'>COMMERCIAL</h2>
            <p className='text-[#908e8e] font-bold'>
              We can be your mover of choice for your next office commercial move whenever you want.
            </p>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col items-center pt-32 md:pt-48'>
        <div className='w-full max-w-4xl px-4 text-center'>
          <h2 className='text-4xl font-bold text-[#676666] mb-5'>OUR STORY</h2>
          <p className='text-[#908e8e] font-semibold text-xl mb-5'>
            We are a customs bonded trucking and warehousing company and we have been in service for over 20 years and are fully committed to providing the best service for our customers.
          </p>
          <p className='text-[#908e8e] font-semibold text-xl mb-5'>
            We started our journey in 1982 and we are located in Ireland and specialize in trucking and warehousing.
          </p>
          <Link 
          to='/about'
          className='text-[#605f5f] font-semibold border-b-2 border-[#605f5f]'>
            MORE ABOUT US
          </Link>
        </div>

        <img className='w-full max-w-2xl mt-10' src={high} alt="High Image" />
      </div>

      <div className='absolute top-[70%] w-full max-w-4xl mx-auto bg-white shadow-lg backdrop-blur-md p-6'>
        <h1 className='text-3xl font-bold text-[#5e5c5c] mb-6 text-center'>CORE VALUES</h1>
        <ul className='list-disc px-6'>
          <li className='py-4 text-xl text-[#767474] font-semibold'>
            A commitment to sustainability and to acting in an environmentally friendly way.
          </li>
          <li className='py-4 text-xl text-[#767474] font-semibold'>
            A commitment to provide innovation and excellence through our extraordinary services.
          </li>
          <li className='py-4 text-xl text-[#767474] font-semibold'>
            A commitment to doing good for the whole world and to bring huge value for the whole generation.
          </li>
          <li className='py-4 text-xl text-[#767474] font-semibold'>
            A commitment to helping everyone regardless of age, gender, religion, status, etc.
          </li>
          <li className='py-4 text-xl text-[#767474] font-semibold'>
            A commitment to building strong relations with our customers through our great work.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Story;
