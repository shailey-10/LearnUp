import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
 
const firebaseConfig = {
    apiKey: "AIzaSyCjEura62egk3GKR7YEcWFGDPwZCwy9FCE",
    authDomain: "learnup-cac21.firebaseapp.com",
    projectId: "learnup-cac21",
    storageBucket: "learnup-cac21.appspot.com",
    messagingSenderId: "945396279584",
    appId: "1:945396279584:web:eae811dee015ed3af84f45"
  };
  
  const app = initializeApp(firebaseConfig);



  export const auth = getAuth(app)