import React, {useEffect} from "react";
import reactDom from "react-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {getAllPeople} from "../Service/People.js"
import {getAllVehicles} from "../Service/Vehicles.js"
import {getAllPlanets} from "../Service/Planets.js"
import { gridPeople } from "../component/gridPeople.jsx";

export const Home = () => {
	useEffect (() => {
	getAllPeople () 
	.then ((res) => res.json())
	.then ((data) => {
		console.log(data)
	})
	.catch ((error) => console.log(error))
	},[])

	useEffect (() => {
		getAllVehicles ()
		.then ((res) => res.json())
		.then ((data) => {
			console.log(data)
		})
		.catch ((error) => console.log(error))
	},[])

	useEffect (() => {
		getAllPlanets ()
		.then ((res) => res.json())
		.then ((data) => {
			console.log(data)
		})
		.catch ((error) => console.log(error))

	},[])

	return (
	<div className="text-center mt-5">
		<h1>StarWarsPedia</h1>
		<gridPeople />
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
)};
