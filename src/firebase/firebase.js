import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB17nCs1DWch35PfJ0X6FAVwA0iqI79eT0",
  authDomain: "hiroko-web.firebaseapp.com",
  projectId: "hiroko-web",
  storageBucket: "hiroko-web.firebasestorage.app",
  messagingSenderId: "641186624158",
  appId: "1:641186624158:web:2ba9eb175d315e199d818f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
