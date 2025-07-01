import React from "react";
import best1 from "./images/best-sellers/best1.webp";
import best2 from "./images/best-sellers/best2.webp";
import best3 from "./images/best-sellers/best3.webp";
import best4 from "./images/best-sellers/best4.webp";
import best5 from "./images/best-sellers/best5.webp";
import best6 from "./images/best-sellers/best6.webp";
import best7 from "./images/best-sellers/best7.webp";
import best8 from "./images/best-sellers/best8.webp";
import "./BestSellers.css";
import "./BestSellersResponsive.css";

const BestSellers = () => {
	return (
		<section className="best_sellers">
			<div className="container">
				<h2 className="best-title">Best sellers</h2>
				<div className="best-content">
					<div className="best-card">
						<div className="card-wrap">
							<img src={best1} alt="Card" className="best-img" />
							<p className="best-content-title">Small Ecru Ceramic Compote<br />$49.00</p>
							<p className="best-content-text">Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
						</div>
						<button className="best-btn">Add to cart</button>
					</div>
					<div className="best-card">
						<div className="card-wrap">
							<img src={best2} alt="Card" className="best-img" />
							<p className="best-content-title">Warrick White Vase 14"<br />$49.00</p>
							<p className="best-content-text">Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.</p>
						</div>
						<button className="best-btn">Add to cart</button>
					</div>
					<div className="best-card">
						<div className="card-wrap">
							<img src={best3} alt="Card" className="best-img" />
							<p className="best-content-title">Porcelain Dinner Plate<br />$49.00</p>
							<p className="best-content-text">Lorem ipsum dolor sit amet conse bolli tetur .</p>
						</div>
						<button className="best-btn">Add to cart</button>
					</div>
					<div className="best-card">
						<div className="card-wrap">
							<img src={best4} alt="Card" className="best-img" />
							<p className="best-content-title">Warrick White Vase 20<br />$49.00</p>
							<p className="best-content-text">Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.</p>
						</div>
						<button className="best-btn">Add to cart</button>
					</div>
					<div className="best-card">
						<div className="card-wrap">
							<img src={best5} alt="Card" className="best-img" />
							<p className="best-content-title">Rounded Dual Handled Vase<br />$49.00</p>
							<p className="best-content-text">Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.</p>
						</div>
						<button className="best-btn">Add to cart</button>
					</div>
					<div className="best-card">
						<div className="card-wrap">
							<img src={best6} alt="Card" className="best-img" />
							<p className="best-content-title">Marin White Dinner Plate<br />$49.00</p>
							<p className="best-content-text">Lorem ipsum dolor sit amet conse.</p>
						</div>
						<button className="best-btn">Add to cart</button>
					</div>
					<div className="best-card">
						<div className="card-wrap">
							<img src={best7} alt="Card" className="best-img" />
							<p className="best-content-title">Tall Cream Ceramic Vase<br />$49.00</p>
							<p className="best-content-text">Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
						</div>
						<button className="best-btn">Add to cart</button>
					</div>
					<div className="best-card">
						<div className="card-wrap">
							<img src={best8} alt="Card" className="best-img" />
							<p className="best-content-title">Luana Bowl<br />$49.00</p>
							<p className="best-content-text">Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.</p>
						</div>
						<button className="best-btn">Add to cart</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BestSellers;