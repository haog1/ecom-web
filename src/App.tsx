import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { BaseLayout } from 'layouts/BaseLayout';
import { HomePage, LoginPage, NotFoundPage, ProductPage } from 'pages';
import { ChangeLanguageSlice } from 'redux/slices/language';
import reduxStore from 'redux/store';

const App: React.FC = () => {
  // Init language
  useEffect(() => {
    const defaultLanguage = 'en';
    reduxStore.dispatch(
      ChangeLanguageSlice.actions.switchLanguage(defaultLanguage),
    );
  }, []);

  return (
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/product/:touristRouteId" component={ProductPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
