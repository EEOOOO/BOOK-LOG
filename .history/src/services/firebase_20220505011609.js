import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'booklist-2294e.firebaseapp.com',
    projectId: 'booklist-2294e',
    databaseURL: 'https://booklist-2294e-default-rtdb.firebaseio.com'
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
