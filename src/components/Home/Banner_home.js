import React from "react";
import Banner from "../Banner/Banner";
import Image from "../../assets/IMG.png"

const BannerHome = () =>{
    return(
        <Banner
         title = "Chez vous, partout et ailleurs"
         src = {Image}
        />
    )
}
export default BannerHome