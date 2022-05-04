import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({authServise}) => {
    
    return  <div className="container">
        <Header />
        <div className="loginContent">
            <h2>Login</h2>
            <ul>
                <li><button>Google</button></li>
                <li><button>Github</button></li>
            </ul>
        </div>
        <Footer />
    </div>
}
            

export default Login;