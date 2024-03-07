import Image from '../../assets/IMG.png'
import '../../styles/Banner_style/Banner.css'

export default function Banner (){
    const title = "Chez vous, partout et ailleurs"
    return(
        <div className='banner'>
            <img src= {Image} alt='bannière' className='banner_image'/>
            <h1 className='banner_title'>{title}</h1>
        </div>
    )
}