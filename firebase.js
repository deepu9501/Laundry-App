 
 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 

 
const firebaseConfig = {
  apiKey: "AIzaSyDkomh4h7s85w3L7I2tB75bzyV3Gq_te8M",
  authDomain: "laundry-app-abcc6.firebaseapp.com",
  projectId: "laundry-app-abcc6",
  storageBucket: "laundry-app-abcc6.appspot.com",
  messagingSenderId: "910359345952",
  appId: "1:910359345952:web:c5bc7c8ecc57593ea27545"
};

 
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();
export {auth,db}