// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6yQkpIwN2VkFzXNXwaa0kxHk6CKycmOk",
  authDomain: "hydroharmony-iot.firebaseapp.com",
  projectId: "hydroharmony-iot",
  storageBucket: "hydroharmony-iot.appspot.com",
  messagingSenderId: "484029961213",
  appId: "1:484029961213:web:94aad0170beaa577507f94"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase