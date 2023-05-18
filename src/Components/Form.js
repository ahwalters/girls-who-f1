import React, { useState } from "react";
//need on submit


//<form class="w3-container w3-card-4 w3-padding-16 w3-white" action="/action_page.php" target="_blank">

//trying to disable button until all fields are filled out

//VALIDATE INPUTS
//yup

export default function Form() {

  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updatedValue => {
      setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
  };

  const [nameInput, setNameInput, handleNameInput] = useInput("");
  const [emailInput, setEmailInput, handleEmailInput] = useInput("");
  const [messageInput, setMessageIput, handleMessageInput] = useInput("");

  const resetValues = () => {
    setNameInput("");
    setEmailInput("");
    setMessageIput("");
  };

  const onSubmit = e => {
    e.preventDefault();
    resetValues()
  }


  return (
    <div>
      <div class="w3-col m7">
        <form class="w3-container w3-card-4 w3-padding-16 w3-white" onSubmit={onSubmit}>
          <div class="w3-section">
            <label>Name
              <input
                className="w3-input"
                name="nameInput"
                onChange={e => handleNameInput(e.target.value)}
                type="text"
                value={nameInput}
                required
              />
            </label>
          </div>
          <div class="w3-section">
            <label>Email
              <input
                className="w3-input"
                name="emailInput"
                onChange={e => handleEmailInput(e.target.value)}
                type="text"
                value={emailInput}
                required
              />
            </label>
          </div>
          <div class="w3-section">
            <label>Message
              <input
                className="w3-input"
                name="messageInput"
                onChange={e => handleMessageInput(e.target.value)}
                type="text"
                value={messageInput}
                required
              />
            </label>
          </div>
          <button className={`w3-button w3-black ${!nameInput ? "w3-disabled w3-btn:disabled w3-button:disabled" : ""}`}>
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}