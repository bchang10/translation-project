import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBxFvFRfEwIGUjvPSA3QuEit97hSirOVLY",
    authDomain: "hmong-translation-97087.firebaseapp.com",
    projectId: "hmong-translation-97087",
    storageBucket: "hmong-translation-97087.appspot.com",
    messagingSenderId: "983219008388",
    appId: "1:983219008388:web:6527990c9e534642c3a3d1",
    measurementId: "G-D4Y4LF82L5"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };
