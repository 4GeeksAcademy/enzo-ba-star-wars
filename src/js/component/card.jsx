import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Card = ({ name, desc, id, type, image }) => {
    const { store, actions } = useContext(Context);

    // Use id as unique identifier for favorites
    const isFavorite = store.favorites.some(fav => fav.id === id && fav.type === type);

    // Function to handle image errors and provide fallbacks
    const getImageUrl = (imgUrl) => {
        if (imgUrl) return imgUrl;
        if (type === "character") {
            return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
        } else if (type === "planet") {
            return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        } else if (type === "vehicle") {
            return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
        }
        return "https://via.placeholder.com/300";
    };

    // Handle favorite toggle
    const handleFavorite = () => {
        const favItem = { id, name, type };
        if (isFavorite) {
            actions.removeFavorite(favItem);
        } else {
            actions.addFavorite(favItem);
        }
    };

    return (
        <div className="mb-3">
            <div className="card" style={{ width: "19rem", height: "100%" }}>
                <img
                    src={getImageUrl(image)}
                    className="card-img-top"
                    alt={name}
                    style={{ height: "200px", objectFit: "cover" }}
                    onError={e => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300";
                    }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{name || "Card Title"}</h5>
                    <div className="card-text mb-3">{desc || "Some quick example text to describe the card."}</div>
                    <div className="d-flex justify-content-between mt-auto">
                        <Link
                            to={`/single/${type}/${id}`}
                            className="btn btn-primary"
                            style={{ width: "120px" }}
                        >
                            Learn More
                        </Link>
                        <button
                            className="btn"
                            onClick={handleFavorite}
                            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                        >
                            <i className={`fa-heart fa-lg ${isFavorite ? "fa-solid text-danger" : "fa-regular text-secondary"}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default Card;