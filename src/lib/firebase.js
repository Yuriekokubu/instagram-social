import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBY5-yxRVrk6m9-F_MOdl5ZJIXnyUsa28c',
  authDomain: 'instagram-6cbcb.firebaseapp.com',
  projectId: 'instagram-6cbcb',
  storageBucket: 'instagram-6cbcb.appspot.com',
  messagingSenderId: '519453776506',
  appId: '1:519453776506:web:d597bce4a4fc63bfea39c3',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
