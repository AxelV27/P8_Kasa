import React from "react"
import Header from "../../components/Hearder"
import Footer from "../../components/Footer"
import BannerApropos from "../../components/Banner/BannerApropos"
import AproposContent from "../../components/A_propos/Apropos_content"

export default function Apropos(){
    return(
        <>
        <Header />
        <BannerApropos />
        <AproposContent />
        <Footer />
        </>
    )
}