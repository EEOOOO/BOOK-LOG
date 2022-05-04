import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

console.log(process.env.REACT_APP_FIREBASE_API_KEY,'d')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
