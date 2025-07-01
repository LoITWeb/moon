import React from "react";
import { Link } from "react-router-dom";
import made1 from "./images/madehistory/made1.webp";
import made2 from "./images/madehistory/made2.webp";
import "./MadeHistory.css";
import "./MadeHistoryResponsive.css";

const MadeHistory = () => {
	return (
		<section className="madehistory">
			<div className="container">
				<div className="made-grid">
					<div className="made-content">
						<p className="made-title">Made in viet Nam since <span>1450</span></p>
						<p className="made-text">
							Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
						</p>
						<Link className="made-link" to={"#!"}>Lear more</Link>
					</div>
					<img src={made1} alt="Photo" className="made-img" />
					<img src={made2} alt="Photo" className="made-img" />
					<div className="made-content">
						<p className="made-title">Our History</p>
						<p className="made-text">
							Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit
						</p>
						<Link className="made-link" to={"#!"}>Lear more</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MadeHistory;