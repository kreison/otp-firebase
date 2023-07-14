import React from 'react';
import { auth } from './configs/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/Login';
import Mainpage from './pages/MainPage';
import classes from './App.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	const [user] = useAuthState(auth);
	return (
    <>
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {user ? <Mainpage /> : <Login />}
      </div>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </>
	);
}

export default App;
