// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK8hd_RlcuaL3Shewd-octfS0tR99Gm5w",
  authDomain: "illume-libaas.firebaseapp.com",
  projectId: "illume-libaas",
  storageBucket: "illume-libaas.appspot.com",
  messagingSenderId: "539736978692",
  appId: "1:539736978692:web:1396e64626fba248180c51",
  measurementId: "G-1Z7FG41266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };