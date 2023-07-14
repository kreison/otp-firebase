import React, { useState } from 'react';
import classes from './SendCode.module.css'
import { Button, Input, Typography } from 'antd';
import { toast } from 'react-toastify';
import { auth } from '../../configs/firebase/firebase';
import { firebase } from '../../configs/firebase/firebase'


const SendCode = (props) => {
	const { setFinal, setShow } = props;
	const [input, setInput] = useState('')
	const signin = () => {
		if (input === "" ) {
			toast.error('Поле не может быть пустым')
		};
		if (input.length < 10){
			toast.error('Поле не должно содержать больше 10 символов')
		}
		try {
			let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
			auth.signInWithPhoneNumber(input, verify).then((result) => {
				setFinal(result);
				toast.success('Код отправлен')
				setShow(true);
			})
			.catch((err) => {
				toast.error('Произошла ошибка')
			});
		} catch (error) {
			return;
		}
		
	}
  return (
    <div className={classes.block}>
			<Typography.Title level={3}>Введите номер</Typography.Title>
			<Input 
				className={classes.input} 
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Номер телефона" 
			/>
			<div id="recaptcha-container"></div>
			<Button 
				type='primary' 
				onClick={signin}
			>
				Отправить код
			</Button>
		</div>
  );
};

export default SendCode;
