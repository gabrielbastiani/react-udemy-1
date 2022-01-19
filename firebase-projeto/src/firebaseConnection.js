import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkoyOoef99gPEFDeky6uN_RRBzmZIAgkU",
    authDomain: "curso-react-1dd9c.firebaseapp.com",
    projectId: "curso-react-1dd9c",
    storageBucket: "curso-react-1dd9c.appspot.com",
    messagingSenderId: "69083410626",
    appId: "1:69083410626:web:0d36c2ca1b99762b5a0b5b",
    measurementId: "G-CMTXYYNCYM"
  };
  
  
  const app = initializeApp(firebaseConfig);

  export default firebase;