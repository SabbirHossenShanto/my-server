// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNtSPEi4W281taDGy2HOa5RLaEVaA9i60",
  authDomain: "facebook-user-1b041.firebaseapp.com",
  projectId: "facebook-user-1b041",
  storageBucket: "facebook-user-1b041.appspot.com",
  messagingSenderId: "403620505261",
  appId: "1:403620505261:web:9e0a1eefa8dfee4d464824",
  measurementId: "G-SVFSSJM3V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app