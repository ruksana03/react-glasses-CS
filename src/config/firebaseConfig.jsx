
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClUv2zj6DaFu0_6esLjGFP2tXy5i85dK4",
  authDomain: "react-glasses-cs.firebaseapp.com",
  projectId: "react-glasses-cs",
  storageBucket: "react-glasses-cs.appspot.com",
  messagingSenderId: "587188826782",
  appId: "1:587188826782:web:51e834f5280aaf8216818f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);