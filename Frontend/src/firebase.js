import firebase from 'firebase/compat/app';
require('@firebase/auth-compat');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBA1ejFTujsuNe6Hs5mubc5S4orC1y2taQ",
    authDomain: "rpa-launcher.firebaseapp.com",
    projectId: "rpa-launcher",
    storageBucket: "rpa-launcher.appspot.com",
    messagingSenderId: "1018573517927",
    appId: "1:1018573517927:web:0540d7fcfde45c5454d0c2"
  });

  const auth = firebase.auth();
  export {auth};

  