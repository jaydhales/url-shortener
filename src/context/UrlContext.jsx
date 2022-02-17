import { createContext, useEffect, useState } from 'react';

const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [urlInput, setUrlInput] = useState('');
  const [rawUrl, setRawUrl] = useState('');
  const [data, setData] = useState([]);
  const [code, setCode] = useState('');

  function addInput(e) {
    e.preventDefault();
    setRawUrl(urlInput);
  }

  useEffect(() => {
    rawUrl !== '' &&
      fetch(`https://api.shrtco.de/v2/shorten?url=${rawUrl}`)
        .then((response) => response.json())
        .then((res) => {
          res.ok && setCode(res.result.code);

          if (!res.ok) {
            alert(res.error);
          } else if (
            data.length > 1 &&
            data.filter((link) => link.code === code) !== []
          ) {
            alert('duplicate link detected');
          } else {
            setData([res.result, ...data]);
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
