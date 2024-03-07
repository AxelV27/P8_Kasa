import React from 'react'
import '../../styles/Home_style/Home.css'
import CardListes from '../../components/Card/CardListes'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Hearder'
import Footer from '../../components/Footer'

export default function Home (){
    return(
        <>
        <Header />
        <Banner />
        <CardListes />
        <Footer />
        </>
    )
}