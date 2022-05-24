import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import {Route, Routes} from 'react-router-dom';
import Maker from './components/maker/maker';

function App({FileInput, authService, CardRepository}) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Login authService={authService}/>}></Route>
        <Route path='maker' element={<Maker authService={authService} FileInput={FileInput} CardRepository={CardRepository}/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
