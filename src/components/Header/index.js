import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/LOGO.svg'
import '../../styles/Header_style/Header.css'

export default function Header(){
    const location = useLocation()
    return (
        <nav className='header'>
            <Link to="/">
            <img src={Logo} alt='Logo Kasa' className='header_logo' />
            </Link>
            <nav className='header_nav'>
            <Link to="/" className={`header_nav ${location.pathname === '/' ? 'active':''} `}>Accueil</Link>
            <Link to="/Apropos" className={`header_nav ${location.pathname === '/Apropos' ? 'active':''} `}>À propos</Link>
            </nav>
        </nav>
    )
}