import "./Header.css";
import React from "react";
import logo from "./logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'
import {  faUser } from '@fortawesome/free-solid-svg-icons'

const Heart = <FontAwesomeIcon icon={faHeart} />
const User = <FontAwesomeIcon icon={faUser} />

const Header = () => {
    return (
        <header className="shadow mb-3 headers">
            <div className="container px-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="profile text-white d-flex align-items-center">
                    <span className=" me-5">O'Z | RU</span>
                    <span className=" fs-5 me-5">{Heart}</span>
                    <button className="me-5 Btn"><span className="me-3">{User}</span>Mening profilim</button>
                    <button className="Bt2"><span className="p-2">Reklamangizni yuboring</span></button>
                </div>
            </div>
        </header>
    )
}

export default Header

