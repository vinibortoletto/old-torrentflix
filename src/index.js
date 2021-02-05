import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

import ScrollToTop from './helpers/scrollToTop';
import { LibraryProvider } from './contexts/Library';
import { AuthProvider } from './contexts/Auth';
import { DataProvider } from './contexts/Data';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LibraryProvider>
          <DataProvider>
            <ScrollToTop />
            <App />
          </DataProvider>
        </LibraryProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
