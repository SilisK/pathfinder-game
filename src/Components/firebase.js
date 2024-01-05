// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIscqHtEOyN3UFQzlHs8jWclmrlUsibrU",
  authDomain: "pathfinder-bdf7b.firebaseapp.com",
  projectId: "pathfinder-bdf7b",
  storageBucket: "pathfinder-bdf7b.appspot.com",
  messagingSenderId: "466194561293",
  appId: "1:466194561293:web:df79b3e8552efebb079844",
  measurementId: "G-GB79JT6YL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {auth, analytics}