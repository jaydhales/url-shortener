import React from 'react';
import BrandRecognizedImage from '../images/icon-brand-recognition.svg';
import DetailRecordImage from '../images/icon-detailed-records.svg';
import FullyCustomImage from '../images/icon-fully-customizable.svg';
import Result from './Result';

const Stats = () => {
  return (
    <div className=' bg-[#eee] py-12 px-4'>
      <Result />
      <div className=''>
        <div className='text-center max-w-[450px] pt-28 m-auto'>
          <h2 className='text-2xl m-6 sm:m-0'>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className='lg:flex m-auto w-max'>
          {[
            [
              'Brand Recognition',
              "Boost your brand recognition with each click, General links don't mean a thing. Branded links help instill confidence in your content",
              BrandRecognizedImage,
              'one',
            ],
            [
              'Detailed Records',
              'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
              DetailRecordImage,
              'two',
            ],
            [
              'Fully Customizable',
              'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement',
              FullyCustomImage,
              'three',
            ],
          ].map(([heading, details, imgUrl, index]) => {
            return (
              <div
                className={`w-[250px] sm:w-[300px] bg-[white] rounded-sm sm:mx-4 my-24 px-4 relative ${index}`}
                key={heading}
              >
                <div className='w-max bg-dark-violet rounded-full m-auto lg:m-0 -translate-y-1/2'>
                  <img src={imgUrl} alt={heading} className='p-4' />
                </div>
                <h3 className='text-xl'>{heading}</h3>
                <p className='pt-4 pb-8'>{details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
