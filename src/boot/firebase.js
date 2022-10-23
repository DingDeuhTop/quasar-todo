// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrxP-wzxfjLg4aRdBiDsUIEG9myoPmHrw",
  authDomain: "pawimawh-d80e4.firebaseapp.com",
  projectId: "pawimawh-d80e4",
  storageBucket: "pawimawh-d80e4.appspot.com",
  messagingSenderId: "1052517527692",
  appId: "1:1052517527692:web:2730aade78a773be920ba9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
export default firebase;
