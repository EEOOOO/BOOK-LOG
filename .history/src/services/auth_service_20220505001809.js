import firebase from 'firebase';
import { GoogleAuthProvider, getAuth, signInWithProvider } from "firebase/auth";
class AuthService{
    login(){
        const auth = getAuth();
        signInWithPopup(auth, provider)
    }
}

export default AuthSErvice