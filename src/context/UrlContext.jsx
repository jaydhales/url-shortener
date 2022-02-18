import { createContext, useEffect, useState } from 'react';

const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [urlInput, setUrlInput] = useState('');
  const [rawUrl, setRawUrl] = useState('');
  const [data, setData] = useState([]);

  function addInput(e) {
    e.preventDefault();
    setRawUrl(urlInput);
  }

  useEffect(() => {
    rawUrl !== '' &&
      fetch(`https://api.shrtco.de/v2/shorten?url=${rawUrl}`)
        .then((response) => response.json())
        .then((res) => {
          if (res.ok) {
            console.log(res.result.code);
            if (
              data.length > 0 &&
              data.filter((link) => link.code === res.result.code).length > 0
            ) {
              console.log('Duplicate Link Detected');
              console.log(data.filter((link) => link.code === res.result.code));
            } else {
              setData([res.result, ...data]);
              
            }
          } else {
            console.log(res.error);
          }

          setUrlInput('');
          setRawUrl('');
        });
  }, [rawUrl]);

  return (
    <UrlContext.Provider
      value={{
        urlInput,
        setUrlInput,
        addInput,
        data,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
}

export default UrlContext;
