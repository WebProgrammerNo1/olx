import "./Home.css"
import React from 'react'
import {Fade}  from"react-awesome-reveal";
import { Link } from "react-router-dom";

const categories =[
    {
        to:"detskiy-mir/",
        backgroundColor:"#ffce32",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        title:"Детский мир"
    
    },
    {
        to:"nedvijimos",
        backgroundColor:"#3a77ff",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
        title:"Недвижимость"
    
    },
    {
        to:"transport",
        backgroundColor:"#23e5db",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png ",
        title:"Транспорт"
    
    },
    {
        to:"rabota",
        backgroundColor:"#ff5636 ",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
        title:"Работа"
    
    },
    {
        to :"zhivotnye",
        backgroundColor:"#fff6d9",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
        title:"Животные"
    
    },
    {
        to :"dom-i-sad",
        backgroundColor:"#ceddff",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
        title:"Дом и сад "
    
    },
    {
        to :"elektronika",
        backgroundColor:"#c8f8f6",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
        title:"Электроника"
    
    },
    {
        to :"uslugi",
        backgroundColor:"#ffd6c9 ",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
        title:"Бизнес и услуги"
    
    },
    {
        to :"moda-i-stil",
        backgroundColor:"#ffce32",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
        title:"Мода и стиль"
    
    },
    {
        to :"hobbi-otdyh-i-sport",
        backgroundColor:"#ceddff ",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
        title:"Хобби, отдых и спорт"
    
    },
    {
        to :"otdam-darom",
        backgroundColor:" #c8f8f6 ",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
        title:"Отдам даром"
    
    },
    {
        to :"obmen-barter",
        backgroundColor:"#ffd6c9",
        img:"https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
        title:"Обмен"
    },
    {
        to :"kzjob",
        backgroundColor:"rgb(255, 246, 217)",
        img:"https://categories.olxcdn.com/assets/promo/olxuz/kzjob-1x.png",
        title:"Работа в Казахстане"
    
    },
]

const Home = () => {
    return (
        <Fade>
            <div className="bg-white">
                <div className="container py-5">
                    <h1 className="text-center">Главные категории</h1>
                    <div className="categories">
                        {categories.map(v=>
                            <Link to={v.to} className="category">
                                <div className="circle" style={{backgroundColor:v.backgroundColor}}>
                                    <img src={v.img} alt="" />
                                </div>
                                <p className="plink text-center">{v.title}</p>
                            </Link>
                            )}
                    </div>
                </div>

            </div>
        </Fade>
    )
}

export default Home
