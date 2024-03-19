import React from "react";
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom'
import logements from '../../datas/locationsList.json';
import Collapse from "../Collapse/Collapse";
import Note from "./NoteLogements";
import Gallerie from "../Gallerie/Gallerie";
import '../../styles/Logements_style/Logements.css'
 

export default function PageLogement () {
    const {id} = useParams()
    const logement = logements.find(logement => logement.id === id)
    if(logement === undefined){
        return(
            <div>
            <h1 className='error_404'>404</h1>
            <h2 className='error_404_subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/' className='error_404_return'>Retourner sur la page d'accueil</Link>
        </div>
        )
    }
    return (
        <section key={logement.id} className="logement__page">
            <Gallerie img = {logement.pictures} />
            <header className="logement__page__header">
                <article className="logement__page__header__infos">
                    <h1 className="logement__page__header__infos__title">{logement.title}</h1>
                    <h2 className="logement__page__header__infos__subtitle">{logement.location}</h2>
                    <div className="logement__page__header__infos__tags">
                        {logement.tags.map((tag, i)=>
                            <p key={i} className="logement__page__header__infos__tags__tag">{tag}</p>
                        )}
                    </div>
                </article>
                <article className="logement__page__header__hote">
                    <div className="logement__page__header__hote__infos">
                        <p className="logement__page__header__hote__infos__name">{logement.host.name}</p>
                        <img  src = {logement.host.picture} alt ="l'hôte" className="logement__page__header__hote__infos__image" />
                    </div>
                    <Note noteValue = {logement.rating}/>
                </article>
            </header>
            <article className="logement__page__collapse">
                <div className="logement__page__collapse__content">
                    <Collapse
                        title = "Description"
                        content = {logement.description} 
                    />
                </div>
                <div className="logement__page__collapse__content">
                    <Collapse
                        title = "Équipements"
                        content = {logement.equipments.map((equipement, i) => 
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