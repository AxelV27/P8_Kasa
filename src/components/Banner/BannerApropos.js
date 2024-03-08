import React from "react";
import AproposBanner from '../../assets/AproposBanner.png'
import '../../styles/Banner_style/Banner.css'

export default function BannerApropos(){
    return(
        <div className="banner">
        <img src={AproposBanner} alt="Bannière à propos" className="banner_image"/>
        </div>
    )
}