// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from './firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCuefVR4zEaS-r-VrhuI8YIcoJrZVrwVr4",
  authDomain: "whatsapp-ae71b.firebaseapp.com",
  projectId: "whatsapp-ae71b",
  storageBucket: "whatsapp-ae71b.appspot.com",
  messagingSenderId: "154864872528",
  appId: "1:154864872528:web:995a59a81da4fdf384f555",
  measurementId: "G-HJ0CD5J1ZE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db


