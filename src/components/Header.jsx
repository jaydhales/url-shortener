import NavMenu from './NavMenu.jsx';
import UrlShortener from './UrlShortener.jsx';
import Btn from './Btn.jsx';
import Illustration from '../images/illustration-working.svg';

const Header = ({ input, setInput }) => {
  return (
    <>
      <div className='p-6 pb-0 sm:px-8 overflow-hidden'>
        <NavMenu />

        <main className='w-max md:w-full md:flex md:flex-row-reverse gap-4 place-items-center m-auto p-6 max-w-[1400px] relative'>
          <img
            src={Illustration}
            alt='working'
            className='w-[120vw] sm:w-[100vw] md:w-3/4 lg:w-[70%] md:translate-x-[30%] md:px-8'
          />

          <div className='md:absolute w-[80vw] left-0 md:w-1/2 '>
            <h1 className='text-5xl md:text-6xl'>
              More the just shorter links
            </h1>
            <p className='my-6'>
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <Btn />
          </div>
        </main>
      </div>
      <UrlShortener input={input} setInput={setInput} />
    </>
  );
};

export default Header;
