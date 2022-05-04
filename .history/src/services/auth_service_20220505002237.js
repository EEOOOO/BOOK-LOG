import firebase from './firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
class AuthService{
    login(){
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
}

export default AuthService