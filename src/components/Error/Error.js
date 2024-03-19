import { Link } from 'react-router-dom'
import '../../styles/Error_style/Error.css'
import React from 'react'

export default function Error(){
    return(
        <div>
            <h1 className='error_404'>404</h1>
            <h2 className='error_404_subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/' className='error_404_return'>Retourner sur la page d'accueil</Link>
        </div>
    )
}