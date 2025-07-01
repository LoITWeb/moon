// src/hooks/useEmail.js
import { useState } from 'react';

const useEmail = () => {
	const [email, setEmail] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Email submitted:', email);
		setEmail(''); // Очистка поля после отправки
	};

	return {
		email,
		handleEmailChange,
		handleSubmit,
	};
};

export default useEmail;
