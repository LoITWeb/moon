import React from "react";
import { Link } from "react-router-dom";
import useMobileNav from "../../../hooks/useMobileNav";
import logo from "./images/logo/logo.png";
import search from "./images/icons/search.svg";
import avatar from "./images/icons/avatar.svg";
import heart from "./images/icons/heart.svg";
import shopping from "./images/icons/shopping.svg";
import "./Header.css";
import "./HeaderResponsive.css";

const Header = () => {
	const { isOpen, toggleNav } = useMobileNav(); // hook

	const handleLinkClick = () => {
		toggleNav(); // Закрываем меню при выборе ссылки
	};

	return (
		<header className="header">
			<div className="container">
				<div className="nav-menu">
					{/* Burger Icon */}
					<div className="nav__icon">
						<button className="mobile-nav-btn" onClick={toggleNav}>
							<div className={`nav-icon ${isOpen ? 'nav-icon--active' : ''}`}></div>
						</button>
					</div>
					<Link className="link-logo" to="/">
						<img src={logo} alt="Logo" className="logo-img" />
					</Link>
					<nav className="nav">
						<ul className="nav-list">
							<li className="nav-item">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Shop">Shop</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/About">About</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Contact">Contact</Link>
							</li>
						</ul>
					</nav>
					<div className="nav-shop">
						<ul className="shop-list">
							<li className="shop-item">
								<Link className="shop-link" to="#!">
									<img src={search} alt="Icon" className="shop-img" />
								</Link>
							</li>
							<li className="shop-item">
								<Link className="shop-link" to="#!">
									<img src={avatar} alt="Icon" className="shop-img" />
								</Link>
							</li>
							<li className="shop-item">
								<Link className="shop-link" to="#!">
									<img src={heart} alt="Icon" className="shop-img" />
								</Link>
							</li>
							<li className="shop-item">
								<Link className="shop-link" to="#!">
									<img src={shopping} alt="Icon" className="shop-img active" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
				<ul className="mobile-nav__list">
					<li><Link className="mobile-nav-link" to="/" onClick={handleLinkClick}>Home</Link></li>
					<li><Link className="mobile-nav-link" to="/Shop" onClick={handleLinkClick}>Shop</Link></li>
					<li><Link className="mobile-nav-link" to="/About" onClick={handleLinkClick}>About</Link></li>
					<li><Link className="mobile-nav-link" to="/Contact" onClick={handleLinkClick}>Contact</Link></li>
				</ul>
				<ul className="mobile-shop-list">
					<li className="mobile-shop-item">
						<Link className="mobile-shop-link" to="#!">
							<img src={search} alt="Icon" className="mobile-shop-img" />
						</Link>
					</li>
					<li className="mobile-shop-item">
						<Link className="mobile-shop-link" to="#!">
							<img src={avatar} alt="Icon" className="mobile-shop-img" />
						</Link>
					</li>
					<li className="mobile-shop-item">
						<Link className="mobile-shop-link" to="#!">
							<img src={heart} alt="Icon" className="mobile-shop-img" />
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
