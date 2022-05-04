import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import AuthService from './services/auth_service';
import firebaseApp from './services/firebase';
const authService = new AuthService(firebaseApp);
function App() {
  return <Login authService={authService}/>
}

export default App;
