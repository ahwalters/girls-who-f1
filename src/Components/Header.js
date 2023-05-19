import React from "react";
import { NavLink, Link, Route, Routes } from 'react-router-dom'

export default function AboutF1() {

    return (
        <div>

            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                    <div className="">
                        <button className="w3-bar-item w3-button">
                            <img src={require("../Assets/Logo_cropped.png")} alt="logo" width="80" />
                        </button>
                    </div>
                    <nav>
                        <div className="w3-right w3-hide-small">
                            <NavLink to="/"><button className="w3-bar-item w3-button" >Home</button></NavLink>
                            <NavLink to="/about"><button className="w3-bar-item w3-button">About Us</button></NavLink>
                            <NavLink to="/contact"><button className="w3-bar-item w3-button">Contact Us</button></NavLink>
                            <NavLink to="/login"><button className="w3-bar-item w3-button">Login</button></NavLink>
                            <NavLink to="/messages"><button className="w3-bar-item w3-button">Messages</button></NavLink>
                            <NavLink to="/upload"><button className="w3-bar-item w3-button">Picks</button></NavLink>
                        </div>
                    </nav>
                </div>
            </div>

            <header className="w3-container w3-center w3-sand" style={{paddingTop:96, paddingBottom: 32, paddingLeft: 16, paddingRight: 16}}>
                {//<h1 className="w3-margin w3-jumbo">GIRLS WHO F1</h1>
                }
                <img src={require("../Assets/Logo_text_black.png")} className="fa w3-margin"/>
            </header>
        </div>
    )
}