import React, { useContext } from 'react';
import UrlContext from '../context/UrlContext';

function Result() {
  const { data } = useContext(UrlContext);

  return (
    <div className='max-w-[1000px] m-auto grid gap-4 my-4'>
      {data.map((result) => (
        <div
          className='w-full p-4 bg-[#fff] rounded-md flex justify-between'
          key={result.code}
        >
          <p className='my-auto text-very-dark-blue '>{result.original_link}</p>
          <div>
            <a
              className='text-cyan px-8'
              target='_blank'
              href={result.full_short_link}
              rel='noreferrer'
            >
              {result.short_link}
            </a>
            <button className='btn rounded-md'>Copy</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Result;
