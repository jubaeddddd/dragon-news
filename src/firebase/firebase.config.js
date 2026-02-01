
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqYCULupyNgzlCcVqx4hPxLfTYSfX0aik",
  authDomain: "dragon-news-229e0.firebaseapp.com",
  projectId: "dragon-news-229e0",
  storageBucket: "dragon-news-229e0.firebasestorage.app",
  messagingSenderId: "1092679073279",
  appId: "1:1092679073279:web:a2a2b995ce9be2d02afbca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);