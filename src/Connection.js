import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAXFF_jM_v-F6jhszPFp5Q4CJv5783DeWo",
    authDomain: "netflix-clone-b2767.firebaseapp.com",
    projectId: "netflix-clone-b2767",
    storageBucket: "netflix-clone-b2767.appspot.com",
    messagingSenderId: "1079068104078",
    appId: "1:1079068104078:web:85966fb0a55c5a30f2c0df"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;