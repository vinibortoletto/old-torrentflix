import React, { useContext, useState, useEffect } from 'react';
import { data as websiteData } from '../helpers/data';

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [data, setData] = useState(websiteData.en);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Set language and saves it to localStorage
    const localLanguage = JSON.parse(localStorage.getItem('language'));
    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      localStorage.setItem('language', JSON.stringify(language));
    }
  }, []);

  useEffect(() => {
    if (language === 'en') setData(websiteData.en);
    else setData(websiteData.br);
  }, [language]);

  useEffect(() => {
    function getWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', getWidth);
    return () => window.removeEventListener('resize', getWidth);
  }, []);

  const value = {
    language,
    setLanguage,
    data,
    width,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
