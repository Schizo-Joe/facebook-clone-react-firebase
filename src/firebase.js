import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBlmoDabaJq3TX8uPK5tmRQdq1KtVdwtPM",
  authDomain: "facebook-clone-64f99.firebaseapp.com",
  databaseURL: "https://facebook-clone-64f99.firebaseio.com",
  projectId: "facebook-clone-64f99",
  storageBucket: "facebook-clone-64f99.appspot.com",
  messagingSenderId: "843270903777",
  appId: "1:843270903777:web:31767ec36a53f7891de4a0",
  measurementId: "G-8KBK27XTE4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//Google Authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;