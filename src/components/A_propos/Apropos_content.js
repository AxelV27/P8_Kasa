import React from "react";
import Collapse from "../Collapse/Collapse";
import '../../styles/Apropos_style/Apropos.css'

export default function AproposContent (){
    return(
        <section className="apropos__collapse">
            <div className="apropos__collapse__content">
                <Collapse 
                    title = "Fiabilité"
                    content = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
                />
            </div>
            <div className="apropos__collapse__content">
                <Collapse 
                    title = "Respect"
                    content = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. '
                />
            </div>
            <div className="apropos__collapse__content">
                <Collapse 
                    title = "Services"
                    content = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. '
                />
            </div>
            <div className="apropos__collapse__content">
                <Collapse 
                    title = "Sécurité"
                    content = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "
                />
            </div>
        </section>
    )
}