/*


  PLAN WEBSITE BEFORE CONTINUING

*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Footer from './components/Footer/Footer';
// Styles
import { GlobalStyles } from './helpers/styles/globalStyles';
// Pages
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <>
      <GlobalStyles />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
      </Switch>

      <Footer />
    </>
  );
}
