import React from "react";
import {useParams} from 'react-router-dom';
import Logements from '../../datas/locationsList.json';
import Collapse from "../Collapse/Collapse";
import Note from "./NoteLogements";
import Gallerie from "../Gallerie/Gallerie";
import '../../styles/Logements_style/Logements.css'
 

export default function PageLogement () {
    const {id} = useParams()
    const Logement = Logements.find(Logement => Logement.id === id)

    return (
        <section key={Logement.id} className="logement__page">
            <Gallerie img = {Logement.pictures} />
            <header className="logement__page__header">
                <article className="logement__page__header__infos">
                    <h1 className="logement__page__header__infos__title">{Logement.title}</h1>
                    <h2 className="logement__page__header__infos__subtitle">{Logement.location}</h2>
                    <div className="logement__page__header__infos__tags">
                        {Logement.tags.map((tag, i)=>
                            <p key={i} className="logement__page__header__infos__tags__tag">{tag}</p>
                        )}
                    </div>
                </article>
                <article className="logement__page__header__hote">
                    <div className="logement__page__header__hote__infos">
                        <p className="logement__page__header__hote__infos__name">{Logement.host.name}</p>
                        <img  src = {Logement.host.picture} alt ="l'hôte" className="logement__page__header__hote__infos__image" />
                    </div>
                    <Note noteValue = {Logement.rating}/>
                </article>
            </header>
            <article className="logement__page__collapse">
                <div className="logement__page__collapse__content">
                    <Collapse
                        title = "Description"
                        content = {Logement.description} 
                    />
                </div>
                <div className="logement__page__collapse__content">
                    <Collapse
                        title = "Équipements"
                        content = {Logement.equipments.map((equipement, i) => 
                            <ul key={i}>
                                <li>{equipement}</li>
                            </ul>
                        )} 
                    />
                </div>
            </article>

        </section>
    )
}