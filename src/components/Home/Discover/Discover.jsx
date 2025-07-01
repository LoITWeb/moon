import React from "react";
import discover1 from "./images/discover/discover1.webp";
import discover2 from "./images/discover/discover2.webp";
import discover3 from "./images/discover/discover3.webp";
import discover4 from "./images/discover/discover4.webp";
import "./Discover.css";
import "./DiscoverResponsive.css";

const Discover = () => {
	return (
		<section className="discover">
			<div className="container">
				<h2 className="discover-title">Discover new arrivals</h2>
				<div className="discover-content">
					<div className="disc-card">
						<div className="card-wrap">
							<img src={discover1} alt="Card" className="disc-img" />
							<p className="disc-title">Porcelain Dinner Plate<br />$49.00</p>
							<p className="disc-text">Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.</p>
						</div>
						<button className="disc-btn">Add to cart</button>
					</div>
					<div className="disc-card">
						<div className="card-wrap">
							<img src={discover2} alt="Card" className="disc-img" />
							<p className="disc-title">Ophelia Matte Natural  Vase<br />$49.00</p>
							<p className="disc-text">Lorem ipsum dolor sit amet conse bolli tetur.</p>
						</div>
						<button className="disc-btn">Add to cart</button>
					</div>
					<div className="disc-card">
						<div className="card-wrap">
							<img src={discover3} alt="Card" className="disc-img" />
							<p className="disc-title">Porcelain Dinner Plate<br />$49.00</p>
							<p className="disc-text">Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.</p>
						</div>
						<button className="disc-btn">Add to cart</button>
					</div>
					<div className="disc-card">
						<div className="card-wrap">
							<img src={discover4} alt="Card" className="disc-img" />
							<p className="disc-title">Luana Bowl<br />$49.00</p>
							<p className="disc-text">Lorem ipsum dolor sit amet conse.</p>
						</div>
						<button className="disc-btn">Add to cart</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discover;