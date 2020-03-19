import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDC7wQEuDSccVFOxVeJPyXuja6OTl5W1FA",
    authDomain: "teinipaa-cb412.firebaseapp.com",
    databaseURL: "https://teinipaa-cb412.firebaseio.com",
    projectId: "teinipaa-cb412",
    storageBucket: "teinipaa-cb412.appspot.com",
    messagingSenderId: "940862666615",
    appId: "1:940862666615:web:866efce8af70f97b881372",
    measurementId: "G-SEZ8V559N1"
  };

  let fire = firebase.initializeApp(firebaseConfig);

  export default fire;