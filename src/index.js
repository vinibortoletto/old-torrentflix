import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

import ScrollToTop from './helpers/scrollToTop';
import { LibraryProvider } from './contexts/Library';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LibraryProvider>
        <ScrollToTop />
        <App />
      </LibraryProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
