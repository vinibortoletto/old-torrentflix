import React, { useContext, useState, useEffect } from 'react';

const LibraryContext = React.createContext();

export function useLibrary() {
  return useContext(LibraryContext);
}

export function LibraryProvider({ children }) {
  const value = {};

  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
}
