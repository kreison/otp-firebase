// main.js
import React from 'react';
import { auth } from '../configs/firebase/firebase';
import classes from './MainPage.module.css'
import { Button, Typography } from 'antd';
const Mainpage = () => {

	const logout = () => {
		auth.signOut();
	}

	return (
		<div className={classes.mainPage}>
			<Typography.Title level={3} >Добро пожаловать! {auth.currentUser.phoneNumber}</Typography.Title>
			<Button
			type='primary'
				onClick={logout}>Выйти</Button>
		</div>
	);
}

export default Mainpage;
