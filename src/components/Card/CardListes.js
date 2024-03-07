import React from "react";
import Logements from '../../datas/locationsList.json'
import Card from "./Card";
import '../../styles/Home_style/Home.css'

export default function CardListes (){
    return (
        <section className="location">
            <ul className="location__liste">
                {Logements.map(({id, title, cover}) =>(
                    <Card 
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )

}