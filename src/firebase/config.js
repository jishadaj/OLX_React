import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCIwdU6MwHbJFfxkI4DWqjAQxxnWB6onF4",
    authDomain: "olx-react-43d58.firebaseapp.com",
    projectId: "olx-react-43d58",
    storageBucket: "olx-react-43d58.appspot.com",
    messagingSenderId: "908050936820",
    appId: "1:908050936820:web:591e9a5174f03dfd297fa1",
    measurementId: "G-9JRCZFYW63"
};

export default firebase.initializeApp(firebaseConfig)