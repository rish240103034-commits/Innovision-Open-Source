import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "demo",
  authDomain: "demo.firebaseapp.com",
  projectId: "demo",
  storageBucket: "demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:demo",
};

// Initialize Firebase only if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

let auth = null;

try {
  auth = getAuth(app);
} catch (error) {
  console.log("Firebase Auth disabled locally");
}

export { db, auth };
