import React from 'react';
import Logo from '../images/logo copy.svg';

const Footer = () => {
  return (
    <div className='px-4 pt-16 pb-4 bg-very-dark-violet'>
      <div className='grid text-center sm:text-left mb-8 lg:grid-cols-9  lg:max-w-[1400px] px-8 m-auto'>
        <div className='lg:col-span-2 mb-8 mx-auto sm:mx-0'>
          <img src={Logo} alt='' className='' />
        </div>

        <div className='grid lg:col-span-7 gap-8 sm:grid-cols-2 lg:grid-cols-5 text-[#fff]'>
          {[
            ['Features', 'Url Shortening', 'Branded Links', 'Analytics'],
            ['Resources', 'Blog', 'Developers', 'Support'],
            ['Company', 'About', 'Our Team', 'Careers', 'Contact'],
          ].map(([heading, ...links]) => (
            <div key={heading} className='col-span-1 grid h-max'>
              <h5 className='text-[#fff] mb-2'>{heading}</h5>
              {links.map((link) => (
                <a href='!#' key={link} className='px-0  hover:text-cyan'>
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div className='flex justify-between lg:col-span-2 gap-2 lg:place-self-end h-full m-auto sm:m-0'>
            {['fa-facebook', 'fa-twitter', 'fa-pinterest', 'fa-instagram'].map(
              (icon) => (
                <a href='!#' className='m-0 p-0 text-[#fff] hover:text-cyan' key={icon}>
                  <i className={`fab ${icon}-square text-4xl sm:text-5xl`}></i>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
