import { initializeApp} from "firebase/app";
import { getDatabase, ref, onValue,set, get, child} from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
//import firebase from 'firebase/app';
//const firebase = require('firebase');
//require('firebase/auth'); 
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const auth = getAuth();
auth.languageCode = 'it';


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export const getAvailabilities = async(data) => {
  
  //const db = getDatabase();
  const avId = 'availabilities/'+data;
  console.log(data, avId)
  
  const dbRef = ref(getDatabase());
  get(child(dbRef, `user/${avId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
      return [];
    }
  }).catch((error) => {
    console.error(error);
  });
};
//Create reservation
export function writeReservation(id, start, end, email, title) {
  const db = getDatabase();
  /*set(ref(db, 'user/availabilities/' + id+ "/"+start+end), {
    start: start,
    end: end
  });*/
    set(ref(db, 'user/meetings/' + id+ "/"+start+end), {
      start: start,
      end: end,
      email: email,
      title: title

    })
    .then(() => {
      console.log("data saved successfully")
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
      console.log("mistake");
    });
}

//Create availabilities
export function writeUserData(id, start, end) {
  const db = getDatabase();
  /*set(ref(db, 'user/availabilities/' + id+ "/"+start+end), {
    start: start,
    end: end
  });*/
    set(ref(db, 'user/availabilities/' + id+ "/"+start+end), {
      start: start,
      end: end
    })
    .then(() => {
      console.log("data saved successfully")
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
      console.log("mistake");
    });
}


/*
export function deleteData(id, start, end) {
  const db = getDatabase();

    // A post entry.
    const postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return update(ref(db), updates);
  }
*/

  export const handleGoogleLogin = async () => {
    
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  };

