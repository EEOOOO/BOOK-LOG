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
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
}

export default AuthService