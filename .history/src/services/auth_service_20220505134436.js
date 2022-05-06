import { GoogleAuthProvider,GithubAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import firebaseApp from './firebase';
class AuthService{
    login(providerName){
        console.log(providerName);
        const auth = getAuth();
        const provider = this.getProvider(providerName);
        return signInWithPopup(auth, provider)
    }
    getProvider(providerName){
        if (providerName == 'Google'){
            console.log(providerName);
            return new GoogleAuthProvider();
        }
        else if (providerName == 'Github'){
            console.log(providerName);
            return new GithubAuthProvider();
        }
    }
}

export default AuthService