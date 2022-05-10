import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import {BrowserRouter, Router, Routes} from 'react-router-dom';
import Maker from './components/maker/maker';

function App({authService}) {
  return (
    <div className={styles.app}>
      <Routes>
        <Router path='/' element={<Login authService={authService}/>}></Router>
        <Router path='maker' element={<Maker/>}></Router>
      </Routes>
    </div>
  )
}

export default App;
