import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBLqG4tL3H3bUqHZhazihflIA2LsKTnXc0",
    authDomain: "discord-clone-dda4f.firebaseapp.com",
    projectId: "discord-clone-dda4f",
    storageBucket: "discord-clone-dda4f.appspot.com",
    messagingSenderId: "178853519785",
    appId: "1:178853519785:web:a98cff7b2f679c3e5824b8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;