import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDR6Bulz0oIuu35TxzmAKbvM-S9YnFD88k",
    authDomain: "clock-c3aa1.firebaseapp.com",
    databaseURL: "https://clock-c3aa1-default-rtdb.firebaseio.com",
    projectId: "clock-c3aa1",
    storageBucket: "clock-c3aa1.appspot.com",
    messagingSenderId: "18453649216",
    appId: "1:18453649216:web:314bbfa860af6e35fb4ca5"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


