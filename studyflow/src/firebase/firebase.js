
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyANXO4Sj9P9LB_ZjCEYejLTyLYt1ljAFK8",
  authDomain: "studyflow-a7a76.firebaseapp.com",
  projectId: "studyflow-a7a76",
  storageBucket: "studyflow-a7a76.appspot.com",
  messagingSenderId: "933958386338",
  appId: "1:933958386338:web:7d1f958105486c94894dfb",
  measurementId: "G-1P87DJKCM5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage }
