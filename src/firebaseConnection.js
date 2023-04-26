import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDd9LjwYedkieej7r4-JBLIyTRHQ-ThQfo",
    authDomain: "lista-de-tarefas-dee6c.firebaseapp.com",
    projectId: "lista-de-tarefas-dee6c",
    storageBucket: "lista-de-tarefas-dee6c.appspot.com",
    messagingSenderId: "52267151572",
    appId: "1:52267151572:web:e6566ba0f52fcb49488b41",
    measurementId: "G-F12K11E9Y4"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

