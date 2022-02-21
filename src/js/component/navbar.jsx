import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<h1>StarWarsPedia</h1>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Fichas</button>
				</Link>
			</div>
		</nav>
	);
};
