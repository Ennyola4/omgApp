// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "omgapp-47798.firebaseapp.com",
  projectId: "omgapp-47798",
  storageBucket: "omgapp-47798.firebasestorage.app",
  messagingSenderId: "1054375609841",
  appId: "1:1054375609841:web:4106e860b29a50ae153050"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);