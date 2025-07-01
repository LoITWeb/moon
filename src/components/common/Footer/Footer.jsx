import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo/logo.png";
import arrow from "./images/icons/arrow-right.svg";
import "./Footer.css";
import "./FooterResponsive.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-left-block">
						<Link className="footer-logo" to="/">
							<img src={logo} alt="Logo" className="footer-logo-img" />
						</Link>
						<p className="footer-text">
							Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
						</p>
						<button className="footer-btn">
							Get started
							<img src={arrow} alt="Button" className="footer-btn-img" />
						</button>
					</div>
					<div className="footer-right-block">
						<div className="right-block">
							<p className="block-title">About us</p>
							<a href="#!" className="block-link">Mission</a>
							<a href="#!" className="block-link">Our team</a>
							<a href="#!" className="block-link">Awards</a>
							<a href="#!" className="block-link">Testimonials</a>
							<a href="#!" className="block-link">Privacy policy</a>
						</div>
						<div className="right-block">
							<p className="block-title">Services</p>
							<a href="#!" className="block-link">Web design</a>
							<a href="#!" className="block-link">Web development</a>
							<a href="#!" className="block-link">Mobile design</a>
							<a href="#!" className="block-link">UI/UX design</a>
							<a href="#!" className="block-link">Branding design</a>
						</div>
						<div className="right-block">
							<p className="block-title">Portfolio</p>
							<a href="#!" className="block-link">Corporate websites</a>
							<a href="#!" className="block-link">E-commerce</a>
							<a href="#!" className="block-link">Mobile apps</a>
							<a href="#!" className="block-link">Landing pages</a>
							<a href="#!" className="block-link">UI/UX projects</a>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<p className="footer-sub-text">Copyright © 2023 Moon<span>|</span></p>
					<p className="footer-sub-text">All Rights Reserved<span>|</span></p>
					<div className="footer-link">
						<Link className="footer-sub-link" to="#!">Terms and Conditions</Link>
						<p className="footer-link-text">|</p>
						<Link className="footer-sub-link" to="#!">Privacy Policy</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;