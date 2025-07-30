
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "syacademy-navigator",
  appId: "1:55153432916:web:6cc030226204cbe7ab50c1",
  storageBucket: "syacademy-navigator.firebasestorage.app",
  apiKey: "AIzaSyAMMW6jtgEzsCcs_dlikciL3JtjoOV3ZS0",
  authDomain: "syacademy-navigator.firebaseapp.com",
  messagingSenderId: "55153432916",
  measurementId: ""
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
