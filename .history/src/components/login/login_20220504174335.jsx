import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = (props) => {
        <script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyB3L2Vz5HO-FC9QhUmPLuzywhkDDczn9RM",
        authDomain: "booklist-2294e.firebaseapp.com",
        projectId: "booklist-2294e",
        storageBucket: "booklist-2294e.appspot.com",
        messagingSenderId: "414005469272",
        appId: "1:414005469272:web:b08bcc09974e33a0622a2d",
        measurementId: "G-MWPNJ208XS"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    </script>

    return  <div className="container">
        <Header />
        <div className="loginContent">
            <h2>Login</h2>

        </div>
        <Footer />
    </div>
}
            

export default Login;