import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNxghWZoXHu_tYi7vi61haqaKiwnkVLDk",
  authDomain: "chen-redpoint-online.firebaseapp.com",
  projectId: "chen-redpoint-online",
  storageBucket: "chen-redpoint-online.firebasestorage.app",
  messagingSenderId: "965203398849",
  appId: "1:965203398849:web:044abd24039ddab3c80440",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);