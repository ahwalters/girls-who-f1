import React from "react";
import * as spotifyLogo from "../Assets/icons8-spotify.json"
//spotify playing json logo???

export default function Player (props){
  
  return (
    <div className="Player">
      
      <h2>SPOTIFY WEB PLAYER</h2>
      <img width="50" height="50" src="https://img.icons8.com/ios/50/spotify--v1.png" alt="spotify--v1"/>
      <button>Play</button>

    </div>
  );
}