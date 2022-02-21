import React, {useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import "../../styles/home.css";
import {getAllPeople} from "../Service/People.js"
import {getAllVehicles} from "../Service/Vehicles.js"
import {getAllPlanets} from "../Service/Planets.js"
import { Card } from "../component/Card.jsx";

export const Home = (props) => {
	const {store, actions} = useContext(Context);
	const getFetchAll = async() => {
		const peoples = await getAllPeople()
		const peoplesJson = await peoples.json()
		console.log(peoplesJson)
		actions.setPeople(peoplesJson.results)
		const planets = await getAllPlanets()
		const planetsJson = await planets.json()
		console.log(planetsJson)
		actions.setPlanets(planetsJson.results)
	}
	useEffect (() => {
		getFetchAll()
	},[])
	console.log(store.people, "peopleStore")
	console.log(store.planets, "planetsStore")
	return (
	<div className="text-center mt-5">
		<h1>StarWarsPedia</h1>
		<div className="row">{store.people.map( (personaje, index)=> <Card name={personaje.name} type="character" key={index}></Card>)}</div>
		{store.planets.map( (planeta, index)=> <Card name={planeta.name} type="planets" key={index}></Card>)}
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
)};
