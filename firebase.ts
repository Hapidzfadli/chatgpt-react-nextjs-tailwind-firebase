import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd2Q0EBa1LYZ4hWWciItNJmpDE2vtwIa0",
    authDomain: "chatgpt-775f2.firebaseapp.com",
    projectId: "chatgpt-775f2",
    storageBucket: "chatgpt-775f2.appspot.com",
    messagingSenderId: "329645873604",
    appId: "1:329645873604:web:ba0b5e9566b9c72a9d2c91",
};
  
// initialize
 const app = getApps().length ? getApp : initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export {db};