// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Paste your Firebase config here:
const firebaseConfig = {
  apiKey: "AIzaSyDld0y3sKb1e0WkNvWqe2NIsKZSpNUHOW0",
  authDomain: "http://my-univen-project.firebaseapp.com",
  projectId: "my-univen-project",
  storageBucket: "http://my-univen-project.firebasestorage.app",
  messagingSenderId: "786720293448",
  appId: "1:786720293448:web:7a775703cbead240f58e7d"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
