import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5IMQGu59LVrK5SVg6BfDWjz0rtIhq08E", //use .env or secrets
  authDomain: "todoauth-4aa3f.firebaseapp.com",
  projectId: "todoauth-4aa3f",
  storageBucket: "todoauth-4aa3f.appspot.com",
  messagingSenderId: "268837373546",
  appId: "1:268837373546:web:bae63262eca47a827b6c13",
  measurementId: "G-DX1PNRFRN2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //initialise the connection between firebase and project

export const auth = getAuth(app);
