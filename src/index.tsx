import React from 'react';
import ReactDOM from 'react-dom';

import 'i18n/configs';

import App from './App';

import 'antd/dist/antd.css';
import 'assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
