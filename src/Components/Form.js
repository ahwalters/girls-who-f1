import React,{useState} from "react";
//need on submit

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
      
        const resetValues = e => {
          e.preventDefault();
          setNameInput("");
          setEmailInput("");
          setMessageIput("");
        };
    

    return (
        <div>
            <form onSubmit={resetValues}>
            <label>Name
            <input
                class="w3-input w3-border"
                name="nameInput"
                onChange={e => handleNameInput(e.target.value)}
                placeholder="Name"
                type="text"
                value={nameInput}
            />
            </label>
            <label>Email
            <input
                class="w3-input w3-border" 
                name="emailInput"
                onChange={e => handleEmailInput(e.target.value)}
                placeholder="Name"
                type="text"
                value={emailInput}
            />
            </label>
            <label>Message
            <input
                class="w3-input w3-border" 
                name="messageInput"
                onChange={e => handleMessageInput(e.target.value)}
                placeholder="Name"
                type="text"
                value={messageInput}
            />
            </label>
            <button class="w3-button w3-black">
              <i class="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </form>
            <div>
                <h3>{nameInput}</h3>
                <h3>{emailInput}</h3>
                <h3>{messageInput}</h3>
            </div>
          </div>
    )
}