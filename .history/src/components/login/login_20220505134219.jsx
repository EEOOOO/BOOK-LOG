import React from 'react';
import AuthService from '../../services/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
const Login = ({authService}) => {
    const onClick = (event) => {
        const authName = event.target.current.value;
        console.log(authName);
        authService.login(authName);
    }
    return  <div className={styles.container}>
        <Header />
        <div className={styles.loginContent}>
            <h2 className={styles.loginTitle}>Login</h2>
            <ul className={styles.loginBtnList}>
                <li><button className={styles.button}onClick={onClick}>Google</button></li>
                <li><button className={styles.button}onClick={onClick}>Github</button></li>
            </ul>
        </div>
        <Footer />
    </div>
}
            

export default Login;