import React from "react";
import {useParams} from 'react-router-dom';
import Logements from '../../datas/locationsList.json';
import Collapse from "../Collapse/Collapse";
import Note from "./NoteLogements";
import Gallerie from "../Gallerie/Gallerie";
 

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
                </article>
            </header>

        </section>
    )
}