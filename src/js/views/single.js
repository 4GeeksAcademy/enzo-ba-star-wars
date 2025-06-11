import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store } = useContext(Context);
	const { type, theid } = useParams();

	const dataMap = {
		planet: store.planets,
		character: store.characters,
		vehicle: store.vehicles,
	};

	const item = dataMap[type]?.[theid];

	if (!item) {
		return (
			<div className="jumbotron text-center">
				<h1>Loading or item not found...</h1>
				<Link to="/" className="btn btn-primary mt-3">Back home</Link>
			</div>
		);
	}

	return (
		<div className="jumbotron text-center">
			<h1 className="display-4">{item.name}</h1>
			<p className="lead">Details for {type} #{theid}</p>

			<hr className="my-4" />
			<ul className="list-unstyled">
				{Object.entries(item).map(([key, value]) => (
					key !== "image" && <li key={key}><strong>{key}:</strong> {value}</li>
				))}
			</ul>

			<Link to="/" className="btn btn-primary mt-3">Back home</Link>
		</div>
	);
};
