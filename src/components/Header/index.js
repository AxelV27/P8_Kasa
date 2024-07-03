import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
import '../../styles/Header_style/Header.css'

export default function Header(){
    const location = useLocation()
    return (
        <nav className='header'>
            <Link to="/P8_Kasa">
            <img src={Logo} alt='Logo Kasa' className='header_logo' />
            </Link>
            <nav className='header_nav'>
            <Link to="/P8_Kasa" className={`header_nav ${location.pathname === '/P8_Kasa' ? 'active':''} `}>Accueil</Link>
            <Link to="/P8_Kasa/Apropos" className={`header_nav ${location.pathname === '/P8_Kasa/Apropos' ? 'active':''} `}>À propos</Link>
            </nav>
        </nav>
    )
}