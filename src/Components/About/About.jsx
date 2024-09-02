import React , {useEffect} from 'react'
import { background } from '../../assets/image'
import { ClientReview, Message , Team , ImageGallery} from '../../index'

function About() {
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
             font-bold tracking-tighter mb-4'>ABOUT US</h2>

            <p className='text-xl lg:w-[38vw] break-words'>
              We are your partners in the process, helping steer you toward new heights 
              of success by providing you the best service possible.</p>
          </div>
       </div>
       </div>
        <Message/>
        <ClientReview/>
        <Team/>
        <ImageGallery/>
       </div>
  )
}

export default About