import React from 'react';
import AuthService from '../../services/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({authService}) => {
    const onClick = () => {
        authService.login();
    }
    return  <div className="container">
        <Header />
        <div className="loginContent">
            <h2>Login</h2>
            <ul>
                <li><button onClick={onClick}>Google</button></li>
                <li><button>Github</button></li>
            </ul>
        </div>
        <Footer />
    </div>
}
            

export default Login;