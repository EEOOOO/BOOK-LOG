import React, { useEffect } from 'react';
import AuthService from '../../services/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({authService}) => {
    const navigate = useNavigate();
    const goToMaker = userId => {
        navigate('/maker',{
            state:{
                id: userId,
            },
        })
    };
    const onLogin = (event) => {
        const authName = event.currentTarget.textContent;
        console.log(authName);
        authService.login(authName)
        .then(data => goToMaker(data.user.uid));
    };
    useEffect(()=>{
        authService.onAuthChange(user => {
            user && goToMaker(user.uid);
        });
    });
    
    return  <div className={styles.container}>
        <Header />
        <div className={styles.loginContent}>
            <h2 className={styles.loginTitle}>Login</h2>
            <ul className={styles.loginBtnList}>
                <li><button className={styles.button} onClick={onLogin}>Google</button></li>
                <li><button className={styles.button} onClick={onLogin}>Github</button></li>
            </ul>
        </div>
        <Footer />
    </div>
}
            

export default Login;