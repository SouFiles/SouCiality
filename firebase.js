// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1RKsKqnAm7vJt4HVMt9M8Y3WM4nWI6Dc",
  authDomain: "souciality.firebaseapp.com",
  projectId: "souciality",
  storageBucket: "souciality.firebasestorage.app",
  messagingSenderId: "352179148995",
  appId: "1:352179148995:web:4d9cab1cdbb058e0f8ea76",
  measurementId: "G-Z379H7PYDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);