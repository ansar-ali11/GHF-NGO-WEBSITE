// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyB64Vz7Zl9ES5oGvXPJJ3YkzB6zaaAbQ_8",
  authDomain: "giving-hands-foundation.firebaseapp.com",
  projectId: "giving-hands-foundation",
  storageBucket: "giving-hands-foundation.firebasestorage.app",
  messagingSenderId: "393472588265",
  appId: "1:393472588265:web:1510920c6898050f157378",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
