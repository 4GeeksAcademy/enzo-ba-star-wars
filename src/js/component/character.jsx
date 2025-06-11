import React, { useContext } from "react";
import { Context } from "../store/appContext";
import peopleData from "../../img/people.json";
import Card from "./card.jsx";

const Character = ({ name, eyeColor, gender, hairColor, id }) => {
    const { store, actions } = useContext(Context);
    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

    const description = `Eye color: ${eyeColor} | Hair color: ${hairColor} | Gender: ${gender}`;

    return (
        <Card
            name={name}
            desc={description}
            id={id}
            type="character"
            image={peopleImage}
        />
    );
};

export default Character;
