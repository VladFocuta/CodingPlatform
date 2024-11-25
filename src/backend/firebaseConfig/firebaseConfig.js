// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQgNhtwZAF9mr0XztxzGiaj6Yx4Vg2-5s",
    authDomain: "learningplatform-da129.firebaseapp.com",
    projectId: "learningplatform-da129",
    storageBucket: "learningplatform-da129.appspot.com",
    messagingSenderId: "368377723137",
    appId: "1:368377723137:web:dd6815ecf8513af6104300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
