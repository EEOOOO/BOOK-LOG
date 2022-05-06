import { GoogleAuthProvider,GithubAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import firebaseApp from './firebase';
class AuthService{
    login(providerName){
        console.log('login');
        const auth = getAuth();
        const provider = getProvider(providerName);
        return signInWithPopup(auth, provider)
    }
    getProvider(providerName){
        if (providerName == 'Google'){
            provider = new GoogleAuthProvider();
        }
        else if providerName == 'Github'{
            provider = new GithubAuthProvider();
        }
    }
}

export default AuthService