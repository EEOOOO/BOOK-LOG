import { GoogleAuthProvider,GithubAuthProvider, getAuth, signInWithPopup, onAuthStateChanged} from "firebase/auth";
import firebaseApp from './firebase';

class AuthService{
    login(providerName){
        const auth = getAuth();
        const provider = this.getProvider(providerName);
        return signInWithPopup(auth, provider)
    }
    getProvider(providerName){
        if (providerName == 'Google'){
            return new GoogleAuthProvider();
        }
        else if (providerName == 'Github'){
            return new GithubAuthProvider();
        }
    }
    onAuthChange(onUserChange){
        onAuthStateChanged(auth, (user) => {
            onUserChange(user);
        }
        )}
}

export default AuthService