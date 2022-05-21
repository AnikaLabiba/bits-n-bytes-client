// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCumTT2Fs3xeZLCk2lWwAQpzmT7yYaYgD4",
    authDomain: "bits-n-bytes-46705.firebaseapp.com",
    projectId: "bits-n-bytes-46705",
    storageBucket: "bits-n-bytes-46705.appspot.com",
    messagingSenderId: "422178284926",
    appId: "1:422178284926:web:07168fea9005797fde3f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;