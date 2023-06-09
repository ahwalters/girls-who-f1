import React from "react";

export default function CTA() {
    return (
        <div className="w3-row-padding w3-padding-64 w3-container w3-white w3-hover-white">
            <div className="w3-content">
                <div className="w3-twothird">
                    <h1>Lorem Ipsum</h1>
                    <h5 className="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

                    <p className="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="w3-third w3-center">
                    <img className="fa w3-padding-64" src={require("../Assets/TrackMap.jpg")} width="275"/>
                </div>
            </div>
        </div>
    )
}