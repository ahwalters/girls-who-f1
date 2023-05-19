import "./index.css";
import React, {useEffect, useState} from "react";
import {Routes, Route} from 'react-router-dom'

import About from './Components/About'
import Contact from './Components/Contact'
import AboutF1 from './Components/AboutF1'
import Footer from './Components/Footer'
import Follow from './Components/Follow'
import Header from './Components/Header'
import Intro from './Components/Intro'
import Pick from "./Components/Pick";
import Schedule from "./Components/Schedule"
import SpotifyPlayer from "./Components/SpotifyPlayer"
import Login from "./Components/Login";
import Messages from "./Components/Messages";
import Upload from "./Components/UploadPick";

export default function App() {
  return (
    
    <div className="App w3-sand">
      <Header />
      <Routes>
        <Route path='/' element={[<Intro/>, <Follow/>,<SpotifyPlayer />, <AboutF1/>, <Schedule />, <Pick />]}/>
        <Route path='about' element={<About /*update={formUpdate} submit={formSubmit} values={formValues} *//>} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='messages' element={<Messages />} />
        <Route path='upload' element={<Upload />} />
    </Routes>
    <Footer />
    </div>
  );
}