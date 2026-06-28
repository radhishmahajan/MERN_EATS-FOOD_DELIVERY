// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "merneats-food-delivery.firebaseapp.com",
  projectId: "merneats-food-delivery",
  storageBucket: "merneats-food-delivery.firebasestorage.app",
  messagingSenderId: "955640195232",
  appId: "1:955640195232:web:9fb0e946e6f2242a3001c5",
  measurementId: "G-TRRWTMFCD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export {app,auth}