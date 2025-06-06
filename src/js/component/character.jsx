import React, {useContext} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import peopleData from "../../img/people.json";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Character = ({ name, eyeColor, gender, hairColor, id }) => {
    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    const{actions, store} = useContext(Context)
    return (

        <div className="card" style={{ width: "16rem", flex: "none", margin: "10px" }}>
            <img src={peopleImage} className="card-img-top" alt={name} style= {{height:"22rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Eye color: {eyeColor}</p>
                <p className="card-text">Hair color: {hairColor}</p>
                <p className="card-text">Gender: {gender}</p>
                <div className="d-flex justify-content-between">
                    <Link to= {"/singleCharacter/" + (id+1)} className="btn btn-outline-primary">Learn more!</Link>
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
export default Character