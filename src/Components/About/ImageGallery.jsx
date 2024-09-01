import React from 'react'
import itemData from './itemData'

function ImageGallery() {
  return (
    <div className='w-full h-screen grid place-items-center bg-slate-200 pt-10'>
        <h1 className='uppercase lg:text-[3rem] text-[2rem] font-bold
        text-[#706e6e]'>our gallery</h1>
    <div className=' flex flex-wrap gap-7 w-full justify-center'>
       {
        itemData.map((item) => (
            <div key={item.id}>
                 <div className=''>
                    <img className='lg:w-[400px] md:w-[300px] w-[200px]' src={item.image}/>
                 </div>
            </div>
        ))
       }
    </div>
    </div>
  )
}

export default ImageGallery