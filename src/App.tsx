import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage, NotFoundPage, ProductPage } from 'pages';
import { setInitLanguageCreator } from 'redux/language/languageActions';
import reduxStore from 'redux/store';

const App: React.FC = () => {
  // Init language
  useEffect(() => {
    const defaultLanguage = 'en';
    const action = setInitLanguageCreator(defaultLanguage);

    reduxStore.dispatch(action);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/product/:touristRouteId" component={ProductPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
