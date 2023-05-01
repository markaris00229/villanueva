import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBHjkzUvYDJaYOW1_D-Lov8mZLGhTsTuIw",
    authDomain: "villanueva-aeb06.firebaseapp.com",
    projectId: "villanueva-aeb06",
    storageBucket: "villanueva-aeb06.appspot.com",
    messagingSenderId: "1083194340234",
    appId: "1:1083194340234:web:4b191a6cf2a33b4f470e73"
  };

  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();