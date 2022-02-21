import React, {useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import "../../styles/home.css";
import {getAllPeople} from "../Service/People.js"
import {getAllVehicles} from "../Service/Vehicles.js"
import {getAllPlanets} from "../Service/Planets.js"
import Card from "../component/Card.jsx";

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
		actions.setPlanet(planetsJson.results)

		const vehicles = await getAllVehicles()
		const vehiclesJson = await vehicles.json()
		console.log(vehiclesJson)
		actions.setVehicle(vehiclesJson.results)
	}
	useEffect (() => {
		getFetchAll()
	},[])
	console.log(store.people, "peopleStore")
	console.log(store.planets, "planetsStore")
	console.log(store.vehicles, "vehiclesStore")
	return (
	<div className="text-center mt-5">
		<div className="row-1">{store.people.map( (personaje, index)=> <Card name={personaje.name} type="character" key={index} id={personaje.uid}></Card>)}</div>
		<div className="row-1">{store.planets.map( (planeta, index)=> <Card name={planeta.name} type="planets" key={index} id={planeta.uid}></Card>)}</div>
		<div className="row-1">{store.vehicles.map( (vehículo, index)=> <Card name={vehículo.name} type="vehicles" key={index} id={vehículo.uid}></Card>)}</div>
		<a href="#" className="btn btn-success">
			Que la fuerza te acompañe...
		</a>
	</div>
)};
