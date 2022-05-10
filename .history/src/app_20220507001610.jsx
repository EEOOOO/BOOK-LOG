import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import {BrowserRouter, Router, Routes} from 'react-router-dom';
import Maker from './components/maker/maker';

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login authService={authService}/>}></Route>
        <Route path='maker' element={<Maker/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
