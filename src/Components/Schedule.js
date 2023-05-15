import React from "react";
//class="w3-container w3-black w3-center w3-opacity w3-padding-64"

export default function Pick() {
    return (
        <div class="w3-row-padding w3-padding-16 w3-container w3-white w3-hover-white">
        <div class="w3-content">
            <div class="w3-twothird">
                <h1>Upload Schedule</h1>

                <p class="w3-text-grey">We record every Sunday race!</p>
                <p class="w3-text-grey">f1 schedule api ??</p>
            </div>
            <div class="w3-third w3-center">
                <img class="fa fa-anchor w3-padding-16" src={require("../Assets/Calendar.jpg")} width="275"/>
            </div>
        </div>
    </div>

    )
}