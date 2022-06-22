import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB5QWvRJ2x1HHSbKWWrvwSwnnhOojPP8Nc",
    authDomain: "instgram-6893f.firebaseapp.com",
    projectId: "instgram-6893f",
    storageBucket: "instgram-6893f.appspot.com",
    messagingSenderId: "140840094241",
    appId: "1:140840094241:web:ece3d650c0665d69e5b160"
};

firebase.initializeApp(firebaseConfig);

export default firebase;