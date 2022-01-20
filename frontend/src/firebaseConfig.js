import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDTQY4QdwKB8ZTeV-8x6iadq5UQPWxl0RM",
  authDomain: "challenge-final-grupoe.firebaseapp.com",
  databaseURL: "https://challenge-final-grupoe-default-rtdb.firebaseio.com",
  projectId: "challenge-final-grupoe",
  storageBucket: "challenge-final-grupoe.appspot.com",
  messagingSenderId: "1034996847569",
  appId: "1:1034996847569:web:8289f7107ad131c26646f0"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
