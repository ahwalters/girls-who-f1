import React from "react";
import Form from "./Form";

export default function Contact() {

  //import icons ???

  return (
    <div className="w3-container w3-padding-64 w3-theme-l5 w3-sand" id="contact">
      <div className="w3-row">
        <div className="w3-col m5">
          <div className="w3-padding-16"><span className="w3-xlarge w3-border-black w3-bottombar">Contact Us</span></div>
          <p><i className="fa fa-map-marker w3-text-black w3-xxlarge"></i>New Jersey, US</p>
          <p><i className="fa fa-phone w3-xxlarge"></i> Phone: +00 12345678</p>
          <p><i className="fa fa-envelope w3-xxlarge"> </i> Email: mail@mail.com</p>
          <br></br>
          <p>Send us a message and we'll get back to you in 1-2 business days!</p>
        </div>
        <Form />
      </div>
    </div>
    )
}