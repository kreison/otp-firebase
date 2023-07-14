import firebase from 'firebase';
 
const firebaseConfig = {
  apiKey: "AIzaSyBLynClttewzjxJBtzDORREzXi8S0j8pmE",
  authDomain: "new-otp-phone.firebaseapp.com",
  projectId: "new-otp-phone",
  storageBucket: "new-otp-phone.appspot.com",
  messagingSenderId: "16879116106",
  appId: "1:16879116106:web:8cdca733e7285a44e22bb3"
}

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
