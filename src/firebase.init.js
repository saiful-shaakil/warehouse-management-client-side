// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbry4lrIPhVqmnHca9BRnVRjVvm-PXXY0",
  authDomain: "warehouse-management-a7690.firebaseapp.com",
  projectId: "warehouse-management-a7690",
  storageBucket: "warehouse-management-a7690.appspot.com",
  messagingSenderId: "581139610577",
  appId: "1:581139610577:web:8e35cbdd9a92a4b8827ef0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
