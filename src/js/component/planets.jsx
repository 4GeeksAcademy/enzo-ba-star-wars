import React, { useContext } from "react";
import { Context } from "../store/appContext";
import planetsData from "../../img/planets.json";
import Card from "./card.jsx";

const Planets = ({ population, terrain, name, id }) => {
  const { actions, store } = useContext(Context);

  const planetImage = planetsData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

  return (
    <Card
      name={name}
      desc={`Population: ${population} | Terrain: ${terrain}`}
      id={id}
      type="planet"
      image={planetImage}
    />
  );
};

export default Planets;
