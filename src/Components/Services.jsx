import React from 'react';
import { trucking, discussion, packages, storage, delivery, deliveryTruck, transport } from '../assets/image.js';

function Services() {
  return (
    <div className='relative w-full min-h-screen bg-cover bg-center overflow-hidden'
      style={{ backgroundImage: `url(${trucking})` }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-red-500/80 via-red-500/80 to-red-500/80'>
        <div className='flex flex-col justify-center items-center gap-y-5 w-full h-full py-10 px-4 md:px-8 lg:px-32'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-extrabold text-white text-center'>OUR SERVICES</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            <div className='flex bg-white p-4 md:p-5 gap-x-4 items-center rounded-lg shadow-md'>
              <div className='border-2 border-dotted p-3 md:p-4 border-red-500 rounded-full'>
                <img src={transport} alt="Transport" className='w-16 h-16 md:w-20 md:h-20' />
              </div>
              <div>
                <h3 className='text-lg md:text-2xl font-extrabold text-[#5d5c5c]'>TRANSPORT</h3>
                <p className='text-sm md:text-xl mt-1 md:mt-2 font-semibold text-[#787676]'>
                  We transport your needs all around the country.
                </p>
              </div>
            </div>

            <div className='flex bg-white p-4 md:p-5 gap-x-4 items-center rounded-lg shadow-md'>
              <div className='border-2 border-dotted p-3 md:p-4 border-red-500 rounded-full'>
                <img src={storage} alt="Storage" className='w-16 h-16 md:w-20 md:h-20' />
              </div>
              <div>
                <h3 className='text-lg md:text-2xl font-extrabold text-[#5d5c5c]'>STORAGE</h3>
                <p className='text-sm md:text-xl mt-1 md:mt-2 font-semibold text-[#787676]'>
                  We store your needs so you don't have to worry.
                </p>
              </div>
            </div>

            <div className='flex bg-white p-4 md:p-5 gap-x-4 items-center rounded-lg shadow-md'>
              <div className='border-2 border-dotted p-3 md:p-4 border-red-500 rounded-full'>
                <img src={discussion} alt="Consulting" className='w-16 h-16 md:w-20 md:h-20' />
              </div>
              <div>
                <h3 className='text-lg md:text-2xl font-extrabold text-[#5d5c5c]'>CONSULTING</h3>
                <p className='text-sm md:text-xl mt-1 md:mt-2 font-semibold text-[#787676]'>
                  We provide expert consulting for logistics.
                </p>
              </div>
            </div>

            <div className='flex bg-white p-4 md:p-5 gap-x-4 items-center rounded-lg shadow-md'>
              <div className='border-2 border-dotted p-3 md:p-4 border-red-500 rounded-full'>
                <img src={deliveryTruck} alt="Trucking" className='w-16 h-16 md:w-20 md:h-20' />
              </div>
              <div>
                <h3 className='text-lg md:text-2xl font-extrabold text-[#5d5c5c]'>TRUCKING</h3>
                <p className='text-sm md:text-xl mt-1 md:mt-2 font-semibold text-[#787676]'>
                  We provide local trucking based on your needs.
                </p>
              </div>
            </div>

            <div className='flex bg-white p-4 md:p-5 gap-x-4 items-center rounded-lg shadow-md'>
              <div className='border-2 border-dotted p-3 md:p-4 border-red-500 rounded-full'>
                <img src={delivery} alt="Deliveries" className='w-16 h-16 md:w-20 md:h-20' />
              </div>
              <div>
                <h3 className='text-lg md:text-2xl font-extrabold text-[#5d5c5c]'>DELIVERIES</h3>
                <p className='text-sm md:text-xl mt-1 md:mt-2 font-semibold text-[#787676]'>
                  We provide door-to-door deliveries for any product.
                </p>
              </div>
            </div>

            <div className='flex bg-white p-4 md:p-5 gap-x-4 items-center rounded-lg shadow-md'>
              <div className='border-2 border-dotted p-3 md:p-4 border-red-500 rounded-full'>
                <img src={packages} alt="Packaging" className='w-16 h-16 md:w-20 md:h-20' />
              </div>
              <div>
                <h3 className='text-lg md:text-2xl font-extrabold text-[#5d5c5c]'>PACKAGING</h3>
                <p className='text-sm md:text-xl mt-1 md:mt-2 font-semibold text-[#787676]'>
                  We will cover your products with solid packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
