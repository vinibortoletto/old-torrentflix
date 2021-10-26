import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAtrCUoEfinWLmFnVqz-BUpYEoCYRxpGag',
  authDomain: 'torrentflix-auth.firebaseapp.com',
  databaseURL: 'https://torrentflix-auth-default-rtdb.firebaseio.com',
  projectId: 'torrentflix-auth',
  storageBucket: 'torrentflix-auth.appspot.com',
  messagingSenderId: '383456091283',
  appId: '1:383456091283:web:64f4512d664ffda5bcc166',
});

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

export const auth = app.auth();
export default app;
