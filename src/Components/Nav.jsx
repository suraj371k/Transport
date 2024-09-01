import React, { useState } from 'react'
import { logo } from '../assets/image'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed top-0 w-full z-30 bg-white'>
      <div className='flex justify-between items-center py-7 px-4 md:px-10'>
        <div className='flex-1'>
          <img src={logo} className='w-24 md:w-32' alt='Logo' />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className='text-2xl' />
            ) : (
              <FaBars className='text-2xl' />
            )}
          </button>
        </div>
        <div className='hidden md:flex flex-1 justify-center'>
          <div className='flex gap-x-12'>
            <Link to='/' className='font-bold text-base'>HOME</Link>
            <Link to='/about' className='font-bold text-base'>ABOUT</Link>
            <Link to='/career' className='font-bold text-base'>CAREERS</Link>
            <Link to='/contact' className='font-bold text-base'>CONTACT</Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='fixed inset-0 z-20 bg-white flex flex-col'>
          <div className='flex justify-between items-center p-4'>
            <img src={logo} className='w-24' alt='Logo' />
            <button onClick={toggleMenu}>
              <FaTimes className='text-2xl' />
            </button>
          </div>

          <div className='flex flex-col items-center gap-y-6 py-10'>
            <Link to='/' className='font-bold text-xl' onClick={toggleMenu}>HOME</Link>
            <Link to='/about' className='font-bold text-xl' onClick={toggleMenu}>ABOUT</Link>
            <Link to='/career' className='font-bold text-xl' onClick={toggleMenu}>CAREERS</Link>
            <Link to='/contact' className='font-bold text-xl' onClick={toggleMenu}>CONTACT</Link>
          </div>

      
        </div>
      )}
    </div>
  )
}

export default Nav;
