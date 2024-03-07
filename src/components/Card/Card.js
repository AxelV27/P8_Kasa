import React from "react";

export default function Card ({id, title, cover}){
    return(
    <li key={id} className="card">
        <a href={'/location/' + id}>
            <figure className="card__figure">
                <img src= {cover} alt = {title} className="card__image"/>
                <figcaption className="card__figcaption">
                    <h2 className="card__title">{title}</h2>
                </figcaption>
            </figure>
        </a>
    </li>
    )
}