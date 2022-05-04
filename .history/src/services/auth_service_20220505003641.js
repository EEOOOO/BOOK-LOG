import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase";
import firebaseApp from './firebase';
class AuthService{
    login(){
        console.log('login');
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        return firebaseApp.signInWithPopup(auth, provider)
    }
}

export default AuthService