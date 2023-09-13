// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDytVqWNB8R8-Xtawrl9qKW7j7U2updZAo",
  authDomain: "interview-b2a24.firebaseapp.com",
  databaseURL: "https://interview-b2a24-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "interview-b2a24",
  storageBucket: "interview-b2a24.appspot.com",
  messagingSenderId: "449056587912",
  appId: "1:449056587912:web:201a51e0bf0d527fc95f3d",
  measurementId: "G-82K27QXM2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}*/