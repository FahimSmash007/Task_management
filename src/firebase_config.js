// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOAYzfkCKer6rP5_22BiZdWcywe5zcd_A",
  authDomain: "task-f0f77.firebaseapp.com",
  projectId: "task-f0f77",
  storageBucket: "task-f0f77.firebasestorage.app",
  messagingSenderId: "857374579036",
  appId: "1:857374579036:web:fa2dbca140d8cd75b04999",
  measurementId: "G-NJ8ZF4WF2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);