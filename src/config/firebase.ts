import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8IIN2Ct_WSHqEANUbt9L3rbusU6_0ADo",
  authDomain: "p2p-platform-86d45.firebaseapp.com",
  projectId: "p2p-platform-86d45",
  storageBucket: "p2p-platform-86d45.appspot.com",
  messagingSenderId: "46313133808",
  appId: "1:46313133808:web:7e6511cff31a9d46811435",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// firebase init
// firebase login
// firebase deploy
