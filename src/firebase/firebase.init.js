// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGDmrdBBsI4pg0FkRpShyq58w-AHIEuT0",
  authDomain: "job-portal-c654b.firebaseapp.com",
  projectId: "job-portal-c654b",
  storageBucket: "job-portal-c654b.firebasestorage.app",
  messagingSenderId: "1069592335861",
  appId: "1:1069592335861:web:8e935462fecea305e1bcbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;