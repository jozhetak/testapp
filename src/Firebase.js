import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcIyJvri-4xZCJqyl8zCesuNOnEy-8-_M",
    authDomain: "reactspa-98a3f.firebaseapp.com",
    databaseURL: "https://reactspa-98a3f.firebaseio.com",
    projectId: "reactspa-98a3f",
    storageBucket: "reactspa-98a3f.appspot.com",
    messagingSenderId: "376722265342"
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;