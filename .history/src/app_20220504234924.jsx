import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';


function App() {
  return <Login AuthService={AuthService}/>
}

export default App;
