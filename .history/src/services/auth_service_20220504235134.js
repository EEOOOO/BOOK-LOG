import firebase from 'firebase';
import { GoogleAuthProvider, getAuth, signInWithProvider } from "firebase/auth";
class AuthService{
    const getAuth = getAuth();
    return signInWithPopup(auth, provider)
}