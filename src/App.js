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

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Change background color
    const bodyElmt = document.querySelector('body');

    if (location.pathname.includes('signup')) {
      bodyElmt.style.backgroundColor = `${vars.color.white}`;
    } else {
      bodyElmt.style.backgroundColor = `${vars.color.black}`;
    }
  }, [location]);

  return (
    <>
      <GlobalStyles />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>

      <Footer />
    </>
  );
}
