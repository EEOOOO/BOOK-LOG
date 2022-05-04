import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import firebaseApp from './firebase';
class AuthService{
    login(){
        console.log('login');
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
}

export default AuthService