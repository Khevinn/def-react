import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.css'

import './services';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
