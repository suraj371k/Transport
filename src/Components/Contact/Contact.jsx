import React, {useEffect} from 'react'
import { background } from '../../assets/image'
import ContactForm from './Contact-from'

function Contact() {
  useEffect(() => {
    window.scroll(0 , 0)
  } , [])
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
             font-bold tracking-tighter mb-4 uppercase font-serif'>Contact us</h2>

            <p className='text-xl lg:w-[38vw] break-words'>
            We love to get feedback and we will love to solve your problems. 
            Contact us today and we will get back to you asap

           </p>
          </div>
       </div>
       </div>
       
       <div>
        <ContactForm/>
       </div>
       </div>
  )
}

export default Contact