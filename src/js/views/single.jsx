import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { getSinglePerson } from "../Service/People";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { type, id } = useParams();
	const getPerson = ()=>{
		getSinglePerson(id)
		.then((res)=>res.json())
		.then((data)=>console.log(data))
		.catch((error)=>console.log(error))
	}
	useEffect( ()=> {
		if (type=="character"){
			getPerson()
		}
	},[])
	const printElement = ()=> {
		if (type=="character"){
			return "character"
		}
		else if(type=="planets"){
			return "planets"
		}
		else {
			return "vehicles"
		}
	}
	return (
		<div className="jumbotron">
			{type},{id}
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
			{printElement()}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
