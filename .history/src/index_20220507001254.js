import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './services/auth_service';
import firebaseApp from './services/firebase';

const authService = new AuthService(firebaseApp);
ReactDOM.render(
  <React.StrictMode>
      <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
