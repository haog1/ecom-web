import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage, NotFoundPage, ProductPage } from 'pages';
import reduxStore from 'redux/store';

const App: React.FC = () => {
  // Init language
  useEffect(() => {
    const defaultLanguage = {
      language: 'en',
      languageList: [
        {
          name: 'English',
          code: 'en',
        },
        {
          name: '中文',
          code: 'zh',
        },
      ],
    };

    const action = {
      type: 'langauges/setInitLanguage',
      payload: defaultLanguage,
    };

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
