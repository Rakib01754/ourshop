// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH7zPE065hy1aH-zaLU-09PX339Mj_Fk0",
    authDomain: "our-shop-fa40d.firebaseapp.com",
    projectId: "our-shop-fa40d",
    storageBucket: "our-shop-fa40d.appspot.com",
    messagingSenderId: "149987534123",
    appId: "1:149987534123:web:6e4c42214d176f2196516e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;