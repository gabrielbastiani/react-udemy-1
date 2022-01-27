import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCRs9JCXHUTBT6TCDPK-l_ofrWKpjCmpCk",
    authDomain: "sistema-de-cadastro-bd2ae.firebaseapp.com",
    projectId: "sistema-de-cadastro-bd2ae",
    storageBucket: "sistema-de-cadastro-bd2ae.appspot.com",
    messagingSenderId: "900333506272",
    appId: "1:900333506272:web:46ad8e6b780c26786e0a85",
    measurementId: "G-9EW7G1HR6Z"
  };
  
  if(!firebase.apps.length){
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  }

  export default firebase;