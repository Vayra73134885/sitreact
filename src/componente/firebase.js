// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC6kuK5E_WyrCmgLNepvtq05UXGxhRQEtc',
    authDomain: 'fb-bdfavoritos-6e4ff.firebaseapp.com',
    projectId: 'favoritos-6e4ff',
    storageBucket: "fb-bdfavoritos-6e4ff.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;