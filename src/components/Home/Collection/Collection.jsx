import React from "react";
import { Link } from "react-router-dom";
import collection_1 from "./images/collection/collection-1.webp";
import collection_2 from "./images/collection/collection-2.webp";
import collection_3 from "./images/collection/collection-3.webp";
import collection_4 from "./images/collection/collection-4.webp";
import coll_img from "./images/cont-img/content-img.webp";
import "./Collection.css";
import "./CollectionResponsive.css";

const Collection = () => {
	return (
		<section className="collection">
			<div className="container">
				<div className="collection-top">
					<div className="collection-card">
						<img src={collection_1} alt="Photo" className="collection-img" />
						<p className="collection-title">TableWare</p>
					</div>
					<div className="collection-card">
						<img src={collection_2} alt="Photo" className="collection-img" />
						<p className="collection-title">Home decor</p>
					</div>
					<div className="collection-card">
						<img src={collection_3} alt="Photo" className="collection-img" />
						<p className="collection-title">Holiday</p>
					</div>
					<div className="collection-card">
						<img src={collection_4} alt="Photo" className="collection-img" />
						<p className="collection-title">Collection</p>
					</div>
				</div>
				<div className="collection-sub">
					<div className="collection-content">
						<p className="coll-content-title">Up to <span>40%</span> off our Christmas collection</p>
						<p className="coll-content-text">
							Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
						</p>
						<Link className="coll-content-link" to={"../../Shop"}>Shop now</Link>
					</div>
					<img src={coll_img} alt="Photo" className="coll-sub-img" />
				</div>
			</div>
		</section>
	);
};

export default Collection;