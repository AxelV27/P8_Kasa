import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import '../../styles/Gallerie_style/Gallerie.css'

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />
const angleRight = <FontAwesomeIcon icon={faAngleRight} />

 const Gallerie = (props) =>{
    const [carousel, setCarousel] = useState(0);
    const imgSize = () =>{
        const carouselshowImg = document.querySelector('.carouselshow__container img');
        if(!carouselshowImg){
            return 0;
        }
        return carouselshowImg.width;
    }

    const Suivant = () => {
        if(carousel === props.img.lenght - 1){
            setCarousel(0)
        } else{
            setCarousel(carousel + 1)
        }
    }

    const Precedent = () => {
        if(carousel === 0 ){
            setCarousel(props.img.lenght - 1)
        } else {
            setCarousel(carousel - 1)
        }
    }

    return (
        <div className="carouselshow">
            <div className="carouselshow__container">
                {props.img.map((picture, i ) =>
                <img className="carouselshow__container__img" alt="bannière-page-logements" src={picture} key={i} /> 
                )}
            </div>
            {props.img.lenght > 1 && 
            <>
                <div className="carouselshow__nav">
                    <i className="carouselshow__nav__fleche" onClick={Precedent}>{angleLeft}</i>
                    <i className="carouselshow__nav__fleche" onClick={Suivant}>{angleRight}</i>
                </div> 
                <div className="carouselshow__index">{carousel + 1} / {props.img.lenght}</div> 
            </>}
        </div>
    )
 }    
export default Gallerie