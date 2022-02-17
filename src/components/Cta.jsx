import React from 'react';
import Btn from './Btn';

const Cta = () => {
  return (
    <div className="bg-dark-violet  bg-[url('images/bg-boost-desktop.svg')] bg-cover bg-center">
      <div className='text-center max-w-[450px] py-12 m-auto'>
        <h2 className='text-3xl text-[#fff] m-4'>Boost your links today</h2>
        <div className='bg-[#fff] rounded-full w-max mt-8 mx-auto'>
          <Btn />
        </div>
      </div>
    </div>
  );
};

export default Cta;
