// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRJmVA47IV__xTWyi2qBHVTNeRJ6nUCsw",
  authDomain: "sakinagadri-web.firebaseapp.com",
  projectId: "sakinagadri-web",
  storageBucket: "sakinagadri-web.appspot.com",
  messagingSenderId: "590771353449",
  appId: "1:590771353449:web:9863cfdbf4d003d11e6ff8",
  measurementId: "G-LEVEZ7JFTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);