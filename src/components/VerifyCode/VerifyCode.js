import React, { useState } from 'react';
import classes from './VerifyCode.module.css';
import { Button, Input, Typography } from 'antd';
import { toast } from 'react-toastify';


const VerifyCode = (props) => {
  const { final } = props;
	const [otp, setOtp] = useState('');

  const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
			toast.success('Успешно зарегестрировано')
		}).catch((err) => {
			toast.error('Неправильный код')
		})
	}
  return (
    <div className={classes.block}>
			<Typography.Title level={3}>Введите код</Typography.Title>
      <Input 
        className={classes.input}
        type="text" 
        placeholder={"Введите код"}
        onChange={(e) => setOtp(e.target.value)}
      />
      <Button
      type='primary' 
      onClick={ValidateOtp}
      >
        Проверить
      </Button>
    </div>
  );
};

export default VerifyCode;
