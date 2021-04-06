import firebase from 'firebase'
// import 'firebase/firestore/'

const firebaseConfig = {
    apiKey: "AIzaSyCral8QYHxnrgYtejyY7Ar_H9jTnIkSFn0",
    authDomain: "cupboard-v2-83deb.firebaseapp.com",
    projectId: "cupboard-v2-83deb",
    storageBucket: "cupboard-v2-83deb.appspot.com",
    messagingSenderId: "184113934053",
    appId: "1:184113934053:web:4d554496b8ee4ce1422e0c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export  default firebase