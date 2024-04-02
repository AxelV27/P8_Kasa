import React from 'react'
import '../../styles/Home_style/Home.css'
import CardListes from '../../components/Card/CardListes'
import BannerHome from '../../components/Home/Banner_home.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home (){
    return(
        <>
        <Header />
        <BannerHome />
        <CardListes />
        <Footer />
        </>
    )
}