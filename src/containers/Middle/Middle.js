import "./Middle.css";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = <FontAwesomeIcon icon={faSearch} />
const Map = <FontAwesomeIcon icon={faMapMarkerAlt} />

const Middle = () => {
    return (
        <div className="Middle">
            <div className="container">
                <div className="input-group d-flex justify-content-center">
                    <div className="search">
                        <span>{Search}</span>
                    </div>
                    <input type="text" className="inputs" placeholder="755 368 объявлений рядом"/>
                    <div className="map">{Map}</div>
                    <input type="text" className="inputlak ms-1 border-0 " placeholder="Весь Узбекистан"/>
                    <div className="input-group-append ms-1">
                        <span className="search2">{Search}</span>
                        <button className=".Btnl">Поиск...</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Middle;
