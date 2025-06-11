import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import Character from "../component/character.jsx";
import Vehicles from "../component/vehicles.jsx";
import Planets from "../component/planets.jsx";


export const Home = () => {
	const { actions, store } = useContext(Context)


	useEffect(() => {
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	}, [])
	return (

		<div className="mt-5">
			<div className=" d-flex text-left pl-2">
				<h1 style={{ color: "red" }}>Characters</h1>
			</div>
			<div className="d-flex flex-row overflow-scroll mt-4">
				{store.characters.map((item, index) => (
					<Character
						key={index}
						name={item.name}
						eyeColor={item.eye_color}
						gender={item.gender}
						hairColor={item.hair_color}
						id={index + 1} 
					/>
				))}
			</div>
			<div className=" d-flex text-left pl-2 mt-2">
				<h1 style={{ color: "red" }}>Planets</h1>
			</div>
			<div className="d-flex flex-row overflow-scroll mt-4">
				{store.planets.map((item, index) => (
					<Planets
						key={index}
						name={item.name}
						population={item.population}
						terrain={item.terrain}
						id={index + 1} // <-- FIXED
					/>
				))}
			</div>
			<div className=" d-flex text-left pl-2 mt-2">
				<h1 style={{ color: "red" }}>Vehicles</h1>
			</div>
			<div className="d-flex flex-row overflow-scroll mt-4">
				{store.vehicles.map((item, index) => (
					<Vehicles
						key={index}
						model={item.model}
						manufacturer={item.manufacturer}
						name={item.name}
						id={index + 1} // <-- FIXED
					/>
				))}
			</div>
		</div>
	)
};
