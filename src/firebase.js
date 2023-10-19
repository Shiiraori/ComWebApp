import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDunsl8pQDuLKkppxMRB1NVKPXyYlMa_Qo",
  authDomain: "commumeterweb.firebaseapp.com",
  projectId: "commumeterweb",
  storageBucket: "commumeterweb.appspot.com",
  messagingSenderId: "200019556540",
  appId: "1:200019556540:web:d3dc07652d457151c3f8b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();