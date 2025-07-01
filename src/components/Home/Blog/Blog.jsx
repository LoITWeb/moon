import React from "react";
import useEmail from "../../../hooks/useEmail";
import { Link } from "react-router-dom";
import blog1 from "./images/blog/blog1.webp";
import "./Blog.css";
import "./BlogResponsive.css";

const Blog = () => {
	const { email, handleEmailChange, handleSubmit } = useEmail(); // hook

	return (
		<section className="blog">
			<div className="container">
				<h2 className="blog-title">Our blog</h2>
				<div className="blog-grid">
					<div className="blog-content">
						<p className="blog-content-text">TableWare</p>
						<p className="blog-content-title">The secrets to a kitchen room</p>
						<p className="blog-sub-text">
							Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
						</p>
						<Link className="blog-link" to={"#!"}>Read more</Link>
					</div>
					<img src={blog1} alt="Photo" className="blog-img" />
				</div>
				<div className="blog-form-content">
					<p className="form-text">Sign up for emails</p>
					<p className="form-title">For news, collections & more</p>
					<form className="blog-form" onSubmit={handleSubmit}>
						<input className="blog-input"
							type="email"
							id="email" 
							name="email"
							autoComplete="email"
							value={email}
							onChange={handleEmailChange}
							placeholder="Enter your email address"
							required
						/>
						<button className="blog-form-btn" type="submit">Sign up</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Blog;