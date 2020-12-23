import firebase from 'firebase';


var firebaseConfig = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      projectId: process.env.REACT_APP_PROJECTID,
      storageBucket: process.env.REACT_APP_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_APPID,
      measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage(); // storage is to store images
const projectFirestore = firebase.firestore(); // database -- firestore is an realtime database from firebase
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };