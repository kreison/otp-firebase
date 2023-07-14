import firebase from 'firebase';
 
const firebaseConfig = {
  apiKey: "AIzaSyAggbxjxZ8vhGyEasEzyCJulue5txNSUUQ",  
  authDomain: "otp-phone-ea164.firebaseapp.com",
  projectId: "otp-phone-ea164",
  storageBucket: "otp-phone-ea164.appspot.com",
  messagingSenderId: "920556560008",
  appId: "1:920556560008:web:852025741f1a7b103e093d"

}

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
