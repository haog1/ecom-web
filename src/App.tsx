import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BaseLayout } from 'layouts/BaseLayout';
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
