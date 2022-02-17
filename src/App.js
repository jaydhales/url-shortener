import Header from './components/Header';
import Stats from './components/Stats';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { UrlProvider } from './context/UrlContext';
import './App.css';

function App() {
  return (
    <UrlProvider>
      <div className=' App text-gray font-medium font-sans'>
        <Header />
        <Stats />
        <Cta />
        <Footer />
      </div>
    </UrlProvider>
  );
}

export default App;
