import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: 'AIzaSyB3L2Vz5HO-FC9QhUmPLuzywhkDDczn9RM',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
