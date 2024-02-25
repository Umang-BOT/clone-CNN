// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAtwGBVD5MGWgcnpArfzZZosC2SY__HYkY",
  authDomain: "cnnnews-d0462.firebaseapp.com",
  projectId: "cnnnews-d0462",
  storageBucket: "cnnnews-d0462.appspot.com",
  messagingSenderId: "169743198912",
  appId: "1:169743198912:web:0357b8d41506f626119b25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)