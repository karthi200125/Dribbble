import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBIhoailYl2iE_HxBw_ZCkN2OLSwMT9qE0",
    authDomain: "dribbble-f41be.firebaseapp.com",
    projectId: "dribbble-f41be",
    storageBucket: "dribbble-f41be.appspot.com",
    messagingSenderId: "22910878100",
    appId: "1:22910878100:web:f9e91affbc4ba71529cf81"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, app };
