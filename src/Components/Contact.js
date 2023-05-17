import React from "react";
import Form from "./Form";

export default function Contact() {

    //import icons ???

    return (
      <div className="w3-container w3-light-grey" id="contact">
        <h3 className="w3-center">CONTACT</h3>
        <p className="w3-center w3-large">Get in touch with us at:</p>
        <div>
          <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> New Jersey, US</p>
          <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +00 12345678</p>
          <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
          <br></br>
          <Form />
      </div>
    </div>
    )
}