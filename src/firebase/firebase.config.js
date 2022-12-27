// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbkeKIqCQjK2JLc4xxtnIlGjfhSydUngM",
  authDomain: "my-task-e3c88.firebaseapp.com",
  projectId: "my-task-e3c88",
  storageBucket: "my-task-e3c88.appspot.com",
  messagingSenderId: "31276130727",
  appId: "1:31276130727:web:68bcd8bc49b7a254541682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;