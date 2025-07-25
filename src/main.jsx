import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/reset.css";
import "./styles/base.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router basename="/moon">
			<App />
		</Router>
	</React.StrictMode>
);