import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage, NotFoundPage, ProductPage } from 'pages';

function App() {
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
}

export default App;
