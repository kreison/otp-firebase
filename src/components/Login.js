// login.js
import React, { useState } from 'react';
import classes from './Login.module.css';
import SendCode from './SendCode/SendCode';
import VerifyCode from './VerifyCode/VerifyCode';


const Login = () => {
	const [show, setShow] = useState(false);
	const [final, setFinal] = useState('');

	return (
		<div className={classes.loginWrapper}>
			{
			show
				?
				<VerifyCode final={final}/>
				:
				<SendCode setShow={setShow} setFinal={setFinal}/>
			}
		</div>
	);
}

export default Login;
