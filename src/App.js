import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// Components
import Footer from './components/Footer/Footer';
// Styles
import { GlobalStyles } from './helpers/styles/globalStyles';
import { vars } from './helpers/styles/variables';
// Pages
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Browse from './pages/Browse/Browse';
import { useLibrary } from './contexts/Library';
import Loading from './components/Loading/Loading';

export default function App() {
  const location = useLocation();
  const { loading } = useLibrary();

  useEffect(() => {
    // Change background color
    const bodyElmt = document.querySelector('body');

    if (location.pathname.includes('signup')) {
      bodyElmt.style.backgroundColor = `${vars.color.white}`;
      return;
    }

    if (location.pathname.includes('browse')) {
      bodyElmt.style.backgroundColor = `${vars.color.darkGrey}`;
      return;
    }

    bodyElmt.style.backgroundColor = `${vars.color.black}`;
  }, [location]);

  return (
    <>
      {loading ? (
        <Loading app />
      ) : (
        <>
          <GlobalStyles />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/browse" component={Browse} />
          </Switch>

          <Footer />
        </>
      )}
    </>
  );
}
