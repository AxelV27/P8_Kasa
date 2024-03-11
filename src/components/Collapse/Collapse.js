import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon = {faAngleDown} />
const angleUp = <FontAwesomeIcon icon = {faAngleUp}/>

const Collapse = (props) => {
    const [ isopen, setIsopen] = useState(false);
    const isopenHandler = () =>{
            setIsopen((isopen)=> !isopen);
    };

 return(
    <>
    <div onClick={isopenHandler} className='collapse__header'>
        <h2 className='collapse__header__title'>{props.title}</h2>
        {!isopen ? <i className='collapse__header__icon'>{angleDown}</i> : <i className='collapse__header__icon'>{angleUp}</i> }
    </div>
    {isopen && 
        <div className='collapse__content'>{props.content}</div>
    }
    </>
 )
}

export default Collapse;