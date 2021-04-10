import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCuHMxRunsBWiCD67fFFJtMKn618KUSwd0",
    authDomain: "whatsapp-clone-70fdb.firebaseapp.com",
    projectId: "whatsapp-clone-70fdb",
    storageBucket: "whatsapp-clone-70fdb.appspot.com",
    messagingSenderId: "1022098703033",
    appId: "1:1022098703033:web:1985c63c2b8b66dc4fd168",
    measurementId: "G-2X15HC06BZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

 export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();

export default db;