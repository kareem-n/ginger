import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOV3pbKIAJc28mMoe8_3Tu_rGSk4ZCTKg",
  authDomain: "ginger-1a892.firebaseapp.com",
  projectId: "ginger-1a892",
  storageBucket: "ginger-1a892.appspot.com",
  messagingSenderId: "960251993701",
  appId: "1:960251993701:web:36babc6a2d01fe6f31f08c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth() ;
export const provider = new GoogleAuthProvider() ;
