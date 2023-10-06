import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const START_PROJECT = process.env.REACT_APP_START_PROJECT.includes('#') ? process.env.REACT_APP_START_PROJECT.split('#')[0].replace(/\s+/g, '') : process.env.REACT_APP_START_PROJECT.replace(/\s+/g, '');

ReactDOM.render(
  <React.StrictMode>
    <App START_PROJECT={START_PROJECT} />
  </React.StrictMode>,
  document.getElementById('root')
);