import React,  { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const SingleCharacter = () => {
    const {theid} = useParams()
    const{actions, store} = useContext(Context)

    useEffect(() => {
        actions.getSingleCharacters(theid)
    }, [])

    return(
        <div>
            <h1>{store.character.name}</h1>
        </div>
    )
}
export default SingleCharacter;