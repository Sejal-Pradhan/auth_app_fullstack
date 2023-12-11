// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREWALL_API_KEY,
  authDomain: "mern-auth-db937.firebaseapp.com",
  projectId: "mern-auth-db937",
  storageBucket: "mern-auth-db937.appspot.com",
  messagingSenderId: "594723812681",
  appId: "1:594723812681:web:b1eee208b1834265c69698",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
