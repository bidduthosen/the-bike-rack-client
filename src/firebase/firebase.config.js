// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXpENVb24qILgoPSVgaHRaeLbJHtFjiBw",
  authDomain: "the-bike-rack-f24f1.firebaseapp.com",
  projectId: "the-bike-rack-f24f1",
  storageBucket: "the-bike-rack-f24f1.appspot.com",
  messagingSenderId: "284728998373",
  appId: "1:284728998373:web:c77b3f537659e089d0570c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;