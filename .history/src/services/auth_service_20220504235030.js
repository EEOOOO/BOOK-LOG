import firebase from 'firebase';
import { GoogleAuthProvider, getAuth, signInWithProvider } from "firebase/auth";
class AuthService{
    constructor(){
        this.getAuth = getAuth();
    }
    signInWithPopup(auth, provider)
 
}