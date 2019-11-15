import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAt51ZeDWLQkkfTr74MB3mFCEUAtHTWbV4",
  authDomain: "realtime-chat-a0432.firebaseapp.com",
  databaseURL: "https://realtime-chat-a0432.firebaseio.com",
  projectId: "realtime-chat-a0432",
  storageBucket: "realtime-chat-a0432.appspot.com",
  messagingSenderId: "798807929403",
  appId: "1:798807929403:web:5ee567de7c1400ea81a21e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()