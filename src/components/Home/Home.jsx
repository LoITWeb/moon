import React from "react";
import { Hero, Collection, BestSellers, MadeHistory, Discover, Blog } from "../Home";

const Home = () => {
	return (
		<div>
			<Hero />
			<Collection />
			<BestSellers />
			<MadeHistory />
			<Discover />
			<Blog />
		</div>
	);
};

export default Home;
