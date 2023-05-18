import { Center } from "@chakra-ui/react";
import React from "react";

export default function About() {

    //hover tags!!!

    return (
     <div className="w3-row-padding w3-center w3-margin-top">
        <h2>Meet the girls</h2>

        <div className="w3-third">
          <div className="w3-card w3-container w3-white w3-hover-white">
            <h3>Kendall</h3><br></br>
            <img className="fa fa-desktop w3-margin-bottom" alt='Kenny' src={require("../Assets/Kenny1.jpg")} width="250"/>
            <p className="w3-opacity">Position</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>

      <div className="w3-third">
        <div className="w3-card w3-container w3-white w3-hover-white">
          <h3>Hunter</h3><br></br>
          <img className="fa fa-css3 w3-margin-bottom" alt='Hunter' src={require("../Assets/Hunter.jpg")} width="250"/>
          <p className="w3-opacity">Position</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      <div className="w3-third">
        <div className="w3-card w3-container w3-white w3-hover-white">
          <h3>Raevin</h3><br></br>
          <img className="fa fa-diamond w3-margin-bottom" alt='Raevin' src={require("../Assets/Raevin.jpg")} width="250"/>
          <p className="w3-opacity">Position</p>          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
    )
}