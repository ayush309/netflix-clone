import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDI-XxY3Y60N9-atJAOcav17HxC3ezU0QE",
  authDomain: "netflix-clone-6d587.firebaseapp.com",
  projectId: "netflix-clone-6d587",
  storageBucket: "netflix-clone-6d587.appspot.com",
  messagingSenderId: "587162421112",
  appId: "1:587162421112:web:144e279c55b67e2109ea8d",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
