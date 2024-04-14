
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import * as dotenv from 'dotenv'
// Your web app's Firebase configuration
dotenv.config()
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: "image-gallery-74340.firebaseapp.com",
  projectId: "image-gallery-74340",
  storageBucket: "image-gallery-74340.appspot.com",
  messagingSenderId: "65062293013",
  appId: "1:65062293013:web:7638e94d33096ea005c81c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};