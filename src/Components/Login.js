import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//need fix on submit

//trying to disable button until all fields are filled out

//VALIDATE INPUTS
//yup
//error div to render conditonally

export default function Login() {

  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updatedValue => {
      setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
  };

  const [usernameInput, setUsernameInput, handleUsernameInput] = useInput("");
  const [passwordInput, setPasswordInput, handlePasswordInput] = useInput("");

  const resetValues = () => {
    setUsernameInput("");
    setPasswordInput("");
    setMessageIput("");
  };

  const onSubmit = e => {
    e.preventDefault();
    resetValues()
  }


  return (
    <div className="w3-padding-64 w3-container w3-center">
      <div className="w3-half">
        <form className="w3-container w3-card-4 w3-padding-16 w3-white" onSubmit={onSubmit}>
          <div className="w3-section">
            <label>Username
              <input
                className="w3-input"
                name="usernameInput"
                onChange={e => handleUsernameInput(e.target.value)}
                type="text"
                value={usernameInput}
                required
              />
            </label>
          </div>
          <div className="w3-section">
            <label>Password
              <input
                className="w3-input"
                name="passwordInput"
                onChange={e => handlePasswordInput(e.target.value)}
                type="text"
                value={passwordInput}
                required
              />
            </label>
          </div>
          <button className={`w3-button w3-black ${!usernameInput ? "w3-disabled w3-btn:disabled w3-button:disabled" : ""}`}>
            <i className="fa fa-sign-in"></i> Sign In
          </button>
        </form>
      </div>
      <div className="w3-half">
        <div className="w3-container">
        <h4>Log in to access the admin portal.</h4>
        <ul>
            <p><i className="fa fa-sharp fa-light fa-user w3-margin-right"></i>Authenticated using firebase</p>
            <p><i className="fa fa-sharp fa-light fa-arrow-up w3-margin-right"></i>Upload weekly picks to server</p>
            <p><i className="fa fa-sharp fa-light fa-cloud w3-margin-right"></i>Access and respond to messages</p>
            <p><i className="fa fa-sharp fa-light fa-gear w3-margin-right"></i>Update...</p>
        </ul>
        </div>
      </div>
    </div>
  )
}