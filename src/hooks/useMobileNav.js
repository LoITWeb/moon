// // src/hooks/useMobileNav.js
// import { useState } from 'react';

// const useMobileNav = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleNav = () => {
// 		setIsOpen(prevState => !prevState);
// 		document.body.classList.toggle('no-scroll', !isOpen);
// 	};

// 	return {
// 		isOpen,
// 		toggleNav,
// 	};
// };

// export default useMobileNav;

// src/hooks/useMobileNav.js
import { useState, useEffect } from 'react';

const useMobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const body = document.body;

		if (isOpen) {
			// сохранить позицию прокрутки и "зафиксировать" страницу (работает корректнее на iOS)
			const scrollY = window.scrollY || window.pageYOffset;
			body.style.position = 'fixed';
			body.style.top = `-${scrollY}px`;
			body.style.left = '0';
			body.style.right = '0';
			body.style.width = '100%';
			body.dataset.scrollY = String(scrollY);
			body.classList.add('no-scroll');
		} else {
			// восстановить прокрутку
			const saved = body.dataset.scrollY ? parseInt(body.dataset.scrollY, 10) : 0;
			body.style.position = '';
			body.style.top = '';
			body.style.left = '';
			body.style.right = '';
			body.style.width = '';
			body.classList.remove('no-scroll');
			delete body.dataset.scrollY;
			// вернуть страницу на прежнюю позицию
			window.scrollTo(0, saved);
		}

		// очистка при размонтировании (на всякий случай)
		return () => {
			body.style.position = '';
			body.style.top = '';
			body.style.left = '';
			body.style.right = '';
			body.style.width = '';
			body.classList.remove('no-scroll');
			delete body.dataset.scrollY;
		};
	}, [isOpen]);

	const toggleNav = () => setIsOpen(prev => !prev);

	return {
		isOpen,
		toggleNav,
	};
};

export default useMobileNav;
