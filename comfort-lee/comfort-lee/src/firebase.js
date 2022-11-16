// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA466g-S6n0Gc5abGQNMmm0uNfIwxDfo3A",
  authDomain: "comfort-lee.firebaseapp.com",
  projectId: "comfort-lee",
  storageBucket: "comfort-lee.appspot.com",
  messagingSenderId: "357116627784",
  appId: "1:357116627784:web:a1afe7cd9e33c577fc417d",
  measurementId: "G-16WWWLS8WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)
const auth = getAuth(app)
export default app
export {analytics,db,auth}