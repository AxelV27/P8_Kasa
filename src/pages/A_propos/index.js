import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BannerApropos from "../../components/A_propos/Apropos_banner.js"
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