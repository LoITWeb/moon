import React from "react";
import useHeroSlides from "../../../hooks/useHeroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules"; 
import slide1 from "./images/hero-slider/slide-1.webp";
import slide2 from "./images/hero-slider/slide-2.webp";
import slide3 from "./images/hero-slider/slide-3.webp";
import slide4 from "./images/hero-slider/slide-4.webp";
import slide5 from "./images/hero-slider/slide-5.webp";
import hero_icon from "./images/icons/hero-icon.svg";
import "./Hero.css";
import "./HeroResponsive.css";

const slides = [slide1, slide2, slide3, slide4, slide5];

const Hero = () => {
	const { currentSlide } = useHeroSlides(slides); // hook

	return (
		<section className="hero">
			<Swiper
				className="mySwiper"
				effect="fade" // Устанавливаем эффект затухания
				fadeEffect={{ crossFade: true }} // Включаем эффект затухания
				loop={true}
				autoplay={{
					delay: 5000, // Меняем слайд каждые 5 секунд
					disableOnInteraction: false, // Не отключать автопрокрутку при взаимодействии
				}}
				modules={[EffectFade, Autoplay]} // Добавляем модули EffectFade и Autoplay
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
						<img src={slide} alt={`Slide ${index + 1}`} className="slider__img" />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="container">
				<div className="hero-content">
					<img src={hero_icon} alt="Icon" className="hero-img" />
					<p className="hero-text">Handcrafted in Viet Nam since 1650</p>
					<p className="hero-title">BAT TRANG DINNER SET</p>
					<button className="hero-btn">SHOP NOW</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
