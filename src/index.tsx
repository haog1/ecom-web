import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'redux/store';

import App from './App';

import 'antd/dist/antd.css';
import 'assets/scss/index.scss';
import 'i18n/configs';
import 'utils/axios';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
