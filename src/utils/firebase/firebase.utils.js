import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjORvAd8c0cJTs2Wfi-cxaj2Tv7wSEtMo",
  authDomain: "crwn-clothing-db-a6ad7.firebaseapp.com",
  projectId: "crwn-clothing-db-a6ad7",
  storageBucket: "crwn-clothing-db-a6ad7.firebasestorage.app",
  messagingSenderId: "732631904719",
  appId: "1:732631904719:web:687d11bc81e7275b2922ba",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
