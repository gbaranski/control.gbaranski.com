import firebase from 'firebase';
import {RequestHistory} from '@gbaranski/types';

const firebaseConfig = {
  apiKey: 'AIzaSyCpRLmvfBf-SpwkDUHKa_vrbEeIvSzHNOY',
  authDomain: 'controlhome-7bbcc.firebaseapp.com',
  databaseURL: 'https://controlhome-7bbcc.firebaseio.com',
  projectId: 'controlhome-7bbcc',
  storageBucket: 'controlhome-7bbcc.appspot.com',
  messagingSenderId: '794654805763',
  appId: '1:794654805763:web:9178272307d06e5eade336',
  measurementId: 'G-J8271YJZER',
};

export function initializeFirebase() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export async function getRequestHistory() {
  const db = firebase.firestore();
  const collection = db.collection('requests').get();
  const requestHistory: RequestHistory[] = [];
  (await collection).forEach((doc) => {
    const docData: RequestHistory = doc.data() as RequestHistory;
    requestHistory.push(docData);
  });
  console.log(requestHistory);
  return requestHistory;
}
