// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2YQNGPL7CU2mXkH5LzffVNH7W2r_WjY",
  authDomain: "shop-7198f.firebaseapp.com",
  databaseURL: "https://shop-7198f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shop-7198f",
  storageBucket: "shop-7198f.appspot.com",
  messagingSenderId: "741812260429",
  appId: "1:741812260429:web:ae21eab2dbf42e6b355604",
  measurementId: "G-E0C84W6KBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);