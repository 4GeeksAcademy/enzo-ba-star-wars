import React, {useContext} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import planetsData from "../../img/planets.json";

const Planets = ({ population, terrain, name, id }) => {
    const{actions, store} = useContext(Context)
    const planetImage = planetsData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

    return (

        <div className="card" style={{ width: "16rem", flex: "none", margin: "10px" }}>
            <img src={planetImage} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Population: {population}</p>
                <p className="card-text">Terrain: {terrain}</p>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => actions.addFavorite(name)}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
        </div>
          
    )
}
export default Planets