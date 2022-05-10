import styles from './maker.module.css';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect } from 'react/cjs/react.production.min';

const Maker = ({authService}) => {
    const onLogout = () => {
        authService.onLogout();

        useEffect(()=>{
            const navigation = useNavigate()
            authService.onAuthChange(user => {
                if(!user) {
                    navigation('/');
                }
            })
        })
    }
    const location = useLocation();
    return <div>
        <Header onLogout={onLogout}/>
        <div className={styles.content}>
            <h1>Hello </h1>
            <h2>User Code - {location.state.id}</h2>
        </div>
        <Footer />
        </div>
}

export default Maker;