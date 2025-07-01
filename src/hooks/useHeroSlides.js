// src/hooks/useHeroSlides.js
import { useEffect, useState } from 'react';

const useHeroSlides = (slides) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000); // Меняем слайд каждые 5 секунд

		return () => clearInterval(interval); // Очистка интервала при размонтировании
	}, [slides.length]);

	return { currentSlide };
};

export default useHeroSlides;
