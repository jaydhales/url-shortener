import React from 'react';
import Logo from '../images/logo.svg';

const NavMenu = () => {
  return (
    <div className='flex justify-between items-center h-max lg:max-w-[1400px] m-auto'>
      <img src={Logo} alt='' className='mr-8'/>
      <nav className='hidden md:flex justify-between w-full'>
        <div className='w-max'>
          <a href='!#'>Features</a>

          <a href='!#'>Pricing</a>

          <a href='!#'>Resources</a>
        </div>
        <div className='w-max'>
          <a href='!#'>Login</a>

          <a href='!#' className='btn ml-6 mr-0'>
            Sign Up
          </a>
        </div>
      </nav>
      <button className='md:hidden'>
        <i className='fas fa-bars fa-2x'></i>
      </button>
    </div>
  );
};

export default NavMenu;
