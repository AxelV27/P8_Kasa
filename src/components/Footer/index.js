import Logo from '../../assets/LOGO.svg'
import '../../styles/Footer_style/Footer.css'

export default function Footer (){
    return(
        <footer className="footer"> 
            <img src={Logo} alt='Logo Kasa' className='footer_logo'></img>
            <h3 className='footer_subtitle'>© 2020 Kasa. All rights reserved</h3>
        </footer>
    )
}