import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NotFound } from 'pages/404';
import { HomePage } from 'pages/home';
import { Login } from 'pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
