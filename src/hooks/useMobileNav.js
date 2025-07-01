// src/hooks/useMobileNav.js
import { useState } from 'react';

const useMobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(prevState => !prevState);
		document.body.classList.toggle('no-scroll', !isOpen);
	};

	return {
		isOpen,
		toggleNav,
	};
};

export default useMobileNav;
