import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configuration de Firebase pour terabois
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "avenue-immo.firebaseapp.com",
  databaseURL:
    "https://avenue-immo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "avenue-immo",
  storageBucket: "avenue-immo.appspot.com",
  messagingSenderId: "1095138669993",
  appId: "1:1095138669993:web:124e0ff01a333b191d80b8",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
