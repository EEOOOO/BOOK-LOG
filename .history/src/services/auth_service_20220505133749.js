import { GoogleAuthProvider,GithubAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import firebaseApp from './firebase';
class AuthService{
    login(authName){
        console.log('login');
        const auth = getAuth();
        const provider = 
        if (authName == 'Google'){
            provider = new GoogleAuthProvider();
        }
        else if authName == 'Github'{
            provider = new GithubAuthProvider();
        }
        return signInWithPopup(auth, provider)
    }
}

export default AuthService