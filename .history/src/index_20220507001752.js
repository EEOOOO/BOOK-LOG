import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './services/auth_service';
import firebaseApp from './services/firebase';
import {BrowserRouter} from 'react-router-dom';

const authService = new AuthService(firebaseApp);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <App authService={authService}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
