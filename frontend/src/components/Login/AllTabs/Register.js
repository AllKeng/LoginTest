import React, { useState, useCallback, useEffect } from "react";
import "../../../styles/Register.css";

//import { useHistory } from "react-router-dom";

// Use history.push('/your-component')

const Register = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userError, setUserError] = useState("")
  const [passwordError, setPasswordError] = useState("")
    
  //const navigate = useHistory();
        
  /**
   * Here we upload the provided username and password to the database
   */
  const createAcc = useCallback(() => {
    // TODO 
    // CHECK IF USERNAME AND PASSWORD EXIST ALREADY
    if(username !== "sungod") {
      setUserError("This username already exists.");

    }
    if(password.length < 7) {
      setPasswordError("The password must be at least 7 characters.");

    }
    else {
      alert("Correct");
    }
  }, [username,password]);

/**
   * Checks to see if the user pressed the enter key
   * Calls pressLogin 
   */
useEffect(() => {
  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      createAcc();
    }
  };

  document.addEventListener('keydown', keyDownHandler);

  return () => {
    document.removeEventListener('keydown', keyDownHandler);
  };
}, [createAcc]);

/**
 * Returns html elements
 */
  return <div className ={"mainContainerR"}>

    <div className={"titleContainerR"}>
      Sign up
    </div>
    <br />

    <div className={"inputContainerR"}>
      <input 
        value={username}
        placeholder="Create username here"
        onChange={ev => setUsername(ev.target.value)}
        className={"inputBox"} />
      <label className="errorLabelR">{userError}</label>
    </div>
    <br />

    <div className={"inputContainerR"}>
      <input 
        value = {password}
        placeholder="Create password here"
        onChange={ev => setPassword(ev.target.value)}
        className={"inputBox"} />
      <label className="errorLabelR">{passwordError}</label>
    </div>
    <br />

    <div className={"inputContainerR"}>
      <input 
        className={"inputButtonR"}
        type="button"
        onClick = {createAcc}
        value={ "Sign Up" } />
    </div>
  </div>
}

export default Register