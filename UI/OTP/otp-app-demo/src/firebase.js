// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6FOdTVFgmlfzZjxw17V7fueflwWMc0ow",
    authDomain: "otp-app-demo-5369a.firebaseapp.com",
    projectId: "otp-app-demo-5369a",
    storageBucket: "otp-app-demo-5369a.appspot.com",
    messagingSenderId: "26196031106",
    appId: "1:26196031106:web:009e03127ac7138f5a669b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;
