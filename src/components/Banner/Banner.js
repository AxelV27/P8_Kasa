import React from 'react'
import '../../styles/Banner_style/Banner.css'

export default function Banner (props){
    return(
        <div className='banner'>
            <img src= {props.src} alt='bannière' className='banner_image'/>
            <h1 className='banner_title'>{props.title}</h1>
        </div>
    )
}