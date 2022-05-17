// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    /*  apiKey: "AIzaSyBMMlRThY95vPYm8RD2hZPREctJKCu5H6Q",
     authDomain: "doctor-portals-e2d2e.firebaseapp.com",
     projectId: "doctor-portals-e2d2e",
     storageBucket: "doctor-portals-e2d2e.appspot.com",
     messagingSenderId: "664093692208",
     appId: "1:664093692208:web:6a8ba8419c4127ad73f8f5", */

    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth