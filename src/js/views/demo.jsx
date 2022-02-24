import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { propTypes } from "react-bootstrap/esm/Image";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.favorites.map((name, id) => {
					return (
						<li
							key={name, id}
							className="list-group-item d-flex justify-content-between"
							>
						{props.name},{props.id}
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
