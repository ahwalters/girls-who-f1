import React from "react";
import {NavLink, Link, Route, Routes} from 'react-router-dom'

export default function AboutF1() {

    return (
        <div>
            <header></header>
            <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                
                <button class="w3-bar-item w3-button">
                <img src={require("../Assets/Logo.png")} alt="logo" width="100"/>
                Girls Who F1
                </button>
                <nav>
                    <div className="w3-right w3-hide-small">
                        <NavLink to ="/"><button className="w3-bar-item w3-button" >Home</button></NavLink>
                        <NavLink to ="/about"><button className="w3-bar-item w3-button">About Us</button></NavLink>
                        <NavLink to ="/contact"><button className="w3-bar-item w3-button">Contact Us</button></NavLink>
                        <NavLink to ="/contact"><button className="w3-bar-item w3-button">Login</button></NavLink>
                    </div>
                </nav>
            </div>
            </div>

            <div>
                <img src={require("../Assets/Logo.png")} alt="logo" width="300"/>
                <h1>Girls Who F1</h1>
            </div>
        </div>
    )
}