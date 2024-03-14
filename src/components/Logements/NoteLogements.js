import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Note = (props) =>{
    const noteValue = props.noteValue
    const range = [1, 2, 3, 4, 5]

    return(
        <div className="logement__page__hote__note">
                {range.map((rangeElem)=>
                    noteValue >= rangeElem ? 
                    <span key={rangeElem.toString()} className="logement__page__hote__note__star">
                        <FontAwesomeIcon icon={faStar}/>
                    </span> 
                    : 
                    <span key={rangeElem.toString()} className="logement__page__hote__note__star__gris">
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                )}
        </div>
    )

}

export default Note