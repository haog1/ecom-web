import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { BaseLayout, UserLayout } from 'layouts';
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  SearchPage,
  SignUpPage,
} from 'pages';
import { ChangeLanguageSlice } from 'redux/slices/language';
import reduxStore from 'redux/store';
import { LayoutRoute } from 'components';

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
      <Switch>
        <LayoutRoute
          path="/login"
          layout={UserLayout}
          component={LoginPage}
          exact
        />
        <LayoutRoute
          path="/signup"
          layout={UserLayout}
          component={SignUpPage}
          exact
        />
        <Route>
          <BaseLayout>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route
                path="/product/:touristRouteId"
                component={ProductPage}
                exact
              />
              <Route path="/search/:keywords?" component={SearchPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </BaseLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
