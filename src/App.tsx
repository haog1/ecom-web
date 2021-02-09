import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from 'react-router-dom';

import { LayoutRoute } from 'components';
import { BaseLayout, UserLayout } from 'layouts';
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  SearchPage,
  ShoppingCartPage,
  SignUpPage,
} from 'pages';
import { useSelector } from 'redux/hooks';
import { ChangeLanguageSlice } from 'redux/slices/language';
import reduxStore from 'redux/store';

interface PrivateRouteProps extends RouteProps {
  component: React.FC;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  isAuthenticated,
  ...rest
}) => {
  const routeComponent = (props: any) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  };

  return <Route render={routeComponent} {...rest} />;
};

const App: React.FC = () => {
  const token = useSelector(state => state.userLoginReducer.token);

  // Init language
  useEffect(() => {
    const defaultLanguage = 'en';
    reduxStore.store.dispatch(
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
              <PrivateRoute
                isAuthenticated={token ? true : false}
                path="/shopping-cart"
                component={ShoppingCartPage}
              />
              {/* This must be the last component */}
              <Route component={NotFoundPage} />
            </Switch>
          </BaseLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
