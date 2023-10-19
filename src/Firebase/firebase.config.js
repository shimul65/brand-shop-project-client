import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0nAUm7AgxaPk6oxaE9BRX_QtM8sfV9ks",
    authDomain: "beautico-brand-shop-shimul.firebaseapp.com",
    projectId: "beautico-brand-shop-shimul",
    storageBucket: "beautico-brand-shop-shimul.appspot.com",
    messagingSenderId: "1068761476282",
    appId: "1:1068761476282:web:2b9128b8ea35c191e8a683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;