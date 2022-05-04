import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
class AuthService{
    login(){
        console.log('login');
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
}

export default AuthService