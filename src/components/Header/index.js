import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
import '../../styles/Header_style/Header.css'

export default function Header(){
    return (
        <nav className='header'>
            <Link to="/">
            <img src={Logo} alt='Logo Kasa' className='header_logo' />
            </Link>
            <div className='header_nav'>
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">À propos</Link>
            </div>
        </nav>
    )
}