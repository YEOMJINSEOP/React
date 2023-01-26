import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
const adminRef = ref(db, 'admins');

export async function getAdmins(){
  onValue(adminRef, (snapshot) => {
    const adminData = snapshot.val();
    console.log(adminData);
  })
}

export async function login(){
  return signInWithPopup(auth, provider)//
    .then((result) => {
      const user = result.user;
      return user
    })//
    .catch((error) => console.error)
}

export async function logout(){
  signOut(auth)//
    .then(() => {
    // Sign-out successful.
    return null
  })//
    .catch((error) => {
    // An error happened.
  });
}

export function onUserStateChange(callback){
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}