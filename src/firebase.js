import firebase from "firebase";
const firebaseConfig = {
    apiKey: "",// add apikey from your firebase config
    authDomain: "clone-challenge-7025c.firebaseapp.com",
    databaseURL: "https://clone-challenge-7025c.firebaseio.com",
    projectId: "clone-challenge-7025c",
    storageBucket: "clone-challenge-7025c.appspot.com",
    messagingSenderId: "303098924916",
    appId: "1:303098924916:web:e21c3e08b464ab12b52621",
    measurementId: "G-G9G7DDCT70"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
