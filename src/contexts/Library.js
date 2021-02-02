import React, { useContext, useState, useEffect } from 'react';

const LibraryContext = React.createContext();

export function useLibrary() {
  return useContext(LibraryContext);
}

export function LibraryProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Set language and saves it to localStorage
    const localLanguage = JSON.parse(localStorage.getItem('language'));
    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      localStorage.setItem('language', JSON.stringify(language));
    }
  }, []);

  const value = {
    language,
    setLanguage,
  };

  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
}
