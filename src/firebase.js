import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/firebase-storage'

var config = {
    apiKey: "AIzaSyBeCqgG8r2oe2Yr1S9S6SFwc7inTlI7G5w",
    authDomain: "prueba-187a9.firebaseapp.com",
    databaseURL: "https://prueba-187a9.firebaseio.com",
    projectId: "prueba-187a9",
    storageBucket: "prueba-187a9.appspot.com",
    messagingSenderId: "961583165767",
    appId: "1:961583165767:web:e81b238b1090762b855c62",
    measurementId: "G-CE4BP751XK"
}
firebase.initializeApp(config)
const database = firebase.firestore();
const st = firebase.storage();
const auth = firebase.auth()

export {
    database,
    st,
    auth
}