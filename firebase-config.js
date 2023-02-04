// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRlCr68BRVzsVgj7eypl5VKyCsNHqd0gQ",
  authDomain: "random-b1e5e.firebaseapp.com",
  projectId: "random-b1e5e",
  storageBucket: "random-b1e5e.appspot.com",
  messagingSenderId: "174353900509",
  appId: "1:174353900509:web:589f072d60e3b58f5e0c34",
  measurementId: "G-M8SSZE8LZH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);


