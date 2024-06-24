import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configuration de Firebase pour terabois
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "terabois-275d5.firebaseapp.com",
  databaseURL:
    "https://terabois-275d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "terabois-275d5",
  storageBucket: "terabois-275d5.appspot.com",
  messagingSenderId: "696961840881",
  appId: "1:696961840881:web:f1113dc97592775bfcdb50",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
