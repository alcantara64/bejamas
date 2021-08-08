import firebase from 'firebase'
import 'firebase/database';
var firebaseConfig = {
    apiKey: "AIzaSyClroXhX18qFSt82t_gkLzEqIo_G3Vsp3k",
    authDomain: "bejamasapi.firebaseapp.com",
    databaseURL: "https://bejamasapi-default-rtdb.firebaseio.com",
    projectId: "bejamasapi",
    storageBucket: "bejamasapi.appspot.com",
    messagingSenderId: "1041740169627",
    appId: "1:1041740169627:web:8f8e5012a3b0427750213e",
    measurementId: "G-XNHNRT2KJS"
};
if (!firebase.apps.length) {
    const firebaseApp = firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

export default db;