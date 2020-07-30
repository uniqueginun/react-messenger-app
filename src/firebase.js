import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBLU06jAMrRVxPMyp672wTAd6Ad9mCLOD8",
  authDomain: "messenger-clone-1673a.firebaseapp.com",
  databaseURL: "https://messenger-clone-1673a.firebaseio.com",
  projectId: "messenger-clone-1673a",
  storageBucket: "messenger-clone-1673a.appspot.com",
  messagingSenderId: "515938456752",
  appId: "1:515938456752:web:a2dfac3d12144865405775",
  measurementId: "G-YPM1YYQN6L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
