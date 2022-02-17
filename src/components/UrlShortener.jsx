import React, { useContext } from 'react';
import UrlContext from '../context/UrlContext';

const UrlShortener = () => {
  const { urlInput, setUrlInput, addInput } = useContext(UrlContext);

  return (
    <div className='translate-y-1/2 mx-6'>
      <form
        className="py-8 px-12 bg-dark-violet  bg-[url('images/bg-boost-desktop.svg')] bg-cover bg-center max-w-[1000px] m-auto rounded-md  flex flex-col sm:flex-row"
        onSubmit={addInput}
      >
        <input
          type='text'
          name='url'
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder='Shorten a link here...'
          className=' placeholder:text-very-dark-blue w-full rounded-md px-4 py-2'
          required
        />

        <div className='bg-[#fff] rounded-md my-4 sm:m-0 sm:ml-4'>
          <input
            type='submit'
            value='Shorten It!'
            className='btn rounded-md m-0 w-full disabled:bg-gray'
          />
        </div>
      </form>
    </div>
  );
};

export default UrlShortener;
