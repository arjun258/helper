import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
export const firebaseConfig = {
    apiKey: "AIzaSyCTvDW8gxSWGJFykV1bDk2SDcNpg4C4AEU",
    authDomain: "helper-861f5.firebaseapp.com",
    databaseURL: "https://helper-861f5-default-rtdb.firebaseio.com",
    projectId: "helper-861f5",
    storageBucket: "helper-861f5.appspot.com",
    messagingSenderId: "867151426620",
    appId: "1:867151426620:web:7a52b558135d27d7997f39"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)