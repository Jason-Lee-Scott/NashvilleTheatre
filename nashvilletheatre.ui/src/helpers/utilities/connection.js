import firebase from 'firebase';
import firebaseConfig from '../apiKeys.json';

const firebaseApp = () => {
  firebase.initializeApp(firebaseConfig.firebaseConfig);
}