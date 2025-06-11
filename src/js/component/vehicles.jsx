import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "./card.jsx";
import vehiclesData from "../../img/vehicles.json";

const STOCK_VEHICLE_IMAGE = "https://starwars-visualguide.com/assets/img/vehicles/4.jpg"; // Sand Crawler

const Vehicles = ({ model, manufacturer, name, id }) => {
    const { actions, store } = useContext(Context);

    // Try to find image by id, else use stock image
    const vehicleImage = vehiclesData.vehicles.find(v => v.id === id)?.image || STOCK_VEHICLE_IMAGE;

    const description = `Model: ${model} | Manufacturer: ${manufacturer}`;

    return (
        <Card
            name={name}
            desc={description}
            id={id}
            type="vehicle"
            image={vehicleImage}
        />
    );
};

export default Vehicles;
