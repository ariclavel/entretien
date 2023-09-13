import { initializeApp} from "firebase/app";
import { getDatabase, ref, onValue,set, get, child, remove} from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


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


//get availabilities
export const getAvailabilities = async(data) => {
  
  // Obtiene una referencia a la base de datos en tiempo real de Firebase
  const database = getDatabase();
  const dataRef = ref(db, `user/availabilities/${data}`);
  console.log(data, "dataref: ",dataRef);

  try {
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const dataObject = snapshot.val();

      // Convierte el objeto en un array de objetos
      const dataArray = Object.values(dataObject);

      // Ahora dataArray contiene los objetos como un array
      console.log(dataArray, dataArray[0]);
      return dataArray;
    } else {
      return [];
      console.log('No se encontraron datos.');
    }
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
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
      return true;
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
      console.log("mistake");
      return false;
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
      console.log("data saved successfully");
      return true;
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
      console.log("mistake");
      return false;
    });
}


export function deleteData(id, start, end) {
  const itemIdToDelete = start+end; // Replace with the actual ID
  const itemRefToDelete = ref(database, `user/availabilities/${id}/${itemIdToDelete}`);
  remove(itemRefToDelete)
    .then(() => {
      console.log('Item deleted successfully.');
    })
    .catch((error) => {
      console.error('Error deleting item:', error);
    });
   
}


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

