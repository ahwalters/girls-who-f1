import React,{useState} from "react";

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
                className="nameInput-text"
                name="nameInput"
                onChange={e => handleNameInput(e.target.value)}
                placeholder="Name"
                type="text"
                value={nameInput}
            />
            </label>
            <label>Email
            <input
                className="emailInput-text"
                name="emailInput"
                onChange={e => handleEmailInput(e.target.value)}
                placeholder="Name"
                type="text"
                value={emailInput}
            />
            </label>
            <label>Message
            <input
                className="messageInput-text"
                name="messageInput"
                onChange={e => handleMessageInput(e.target.value)}
                placeholder="Name"
                type="text"
                value={messageInput}
            />
            </label>
            <button>Submit</button>
            </form>
            <div>
                <h3>{nameInput}</h3>
                <h3>{emailInput}</h3>
                <h3>{messageInput}</h3>
            </div>
          </div>
    )
}