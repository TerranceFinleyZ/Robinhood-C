import firebase from 'firebase/compat'
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyAKHbV71BOV7MO4QXoWIMu8BQGmjvOoZrM",
    authDomain: "robin-ef4e7.firebaseapp.com",
    projectId: "robin-ef4e7",
    storageBucket: "robin-ef4e7.appspot.com",
    messagingSenderId: "835707238339",
    appId: "1:835707238339:web:913c07bcec0c66ebbc2f76",
    measurementId: "G-N9PTL2Q0ZJ"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };