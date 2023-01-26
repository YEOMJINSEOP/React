import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { child, get, getDatabase, onValue, ref } from "firebase/database";

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
const database = getDatabase(app);
const dbRef = ref(getDatabase());

export function login(){
  return signInWithPopup(auth, provider)//
    .then((result) => {
      const user = result.user;
      return user
    })//
    .catch((error) => console.error)
}

export function logout(){
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
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await checkAdminUser(user) : null;
    callback(updatedUser);
  });
}

async function checkAdminUser(user){
  return get(child(dbRef, 'admins'))//
    .then((snapshot) => {
      if(snapshot.exists()){
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        console.log(isAdmin);
        return {...user, isAdmin};
      }
      else{
        return user;
      }
    })//
    .catch(console.error)
};