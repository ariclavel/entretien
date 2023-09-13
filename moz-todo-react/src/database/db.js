import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue,set, get, child} from "firebase/database";
//const firebase = require('firebase');
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


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export const test = async() => {
  console.log("Holi")
  //const db = getDatabase();
  const userId = 'availabilities/09-13-2023';
  
  const dbRef = ref(getDatabase());
  get(child(dbRef, `user/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
};
export function writeUserData(id, start, end) {
  console.log("esteeee")
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

