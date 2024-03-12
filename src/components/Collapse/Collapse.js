import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Collapse_style/Collapse.css'

const angleUp = <FontAwesomeIcon icon = {faAngleUp}/>

const Collapse = (props) => {
    const [ isopen, setIsopen] = useState(false);
    const isopenHandler = () =>{
            setIsopen((isopen)=> !isopen);
    };

 return(
    <>
    <div className='collapse__header'>
        <h2 className='collapse__header__title'>{props.title}</h2>
            <i onClick={isopenHandler} className={`collapse__header__icon ${isopen ? 'open': 'close'}`}>{angleUp}</i>
    </div>
    {isopen && 
        <div className="collapse__content">{props.content}</div>
    }
    </>
 )
}

export default Collapse;