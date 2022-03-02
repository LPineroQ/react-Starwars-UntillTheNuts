import React, { useContext } from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	console.log(store)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<img className="image-top" alt="10px" src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"></img>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Favoritos {store.favorites.length}</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								{store.favorites.map((name, id) => {
									return (
										<li
										key={name, id}
										className="list-group-item d-flex justify-content-between"
										>
										{name},{id}
										</li>)})}
						</ul>
				</Link>
			</div>
		</nav>
	);
};
