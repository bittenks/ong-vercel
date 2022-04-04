import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyC63UkqKR6xwuPbDkQSmVc_L90m8UiYXU0",

  authDomain: "ong-amigos-protetores.firebaseapp.com",

  databaseURL: "https://ong-amigos-protetores-default-rtdb.firebaseio.com",

  projectId: "ong-amigos-protetores",

  storageBucket: "ong-amigos-protetores.appspot.com",

  messagingSenderId: "194111390028",

  appId: "1:194111390028:web:e038f5fd10d0d733f04fe9",

  measurementId: "G-XCQXEV6E91"


}
firebase.initializeApp(firebaseConfig);
const st = firebase.storage();
const auth = firebase.auth();
const db = firebase.database();
export {st};
export {auth};
export {db};
export default firebase;