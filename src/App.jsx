import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/common";
import { Home, Shop, About, Contact } from "./components";

const App = () => {
	return (
		<div className="wrapper">
			<Header />

			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Shop" element={<Shop />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
};

export default App;