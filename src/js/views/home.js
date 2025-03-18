import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import Character from "../component/character.jsx";

export const Home = () => {
	const { actions, store } = useContext(Context)


	useEffect(() => {
		actions.getCharacters()
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
					/>
				))}
			</div>
		</div>
	)
};
