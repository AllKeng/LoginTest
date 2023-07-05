import React, { useState, useEffect, useCallback } from "react";
import "../../../styles/Login.css";
/*
import { useHistory } from "react-router-dom"; v5
Use history.push('/your-component')
*/

const Login = (props) => {
  /* Where the form data is stored. */
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let [userError, setUserError] = useState("")
  let [passwordError, setPasswordError] = useState("")

  //const navigate = useHistory();

  /**
   * Removes red error messages when called.
   */
  const resetErrors = () => {
    setUserError("");
    setPasswordError("");
  }       

  /**
   * Actions to take after pressing the "Log in" button
   * useCallback allows the function to be passed as a parameter for eventListener
   */
  const pressLogin = useCallback(() => {
    // TODO

    // CHECK IF USERNAME AND PASSWORD EXIST
    if(username !== "sungod") {
      setUserError("The username does not exist.");

    }
    if(password !== "waffle") {
      setPasswordError("The password is incorrect.");

    }
    else {
      alert("Correct");
    }
  }, [username,password]);

  /**
   * Actions to take after pressing the "Log in as Guest" button
   */
  const loginAsGuest = () => {
    // temporary
    alert(`Username is Panda1 and password is SunGod` );
  }

  /**
   * Checks to see if the user pressed the enter key
   * Calls pressLogin 
   */
  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        pressLogin();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [pressLogin]);

/**
 * Returns html elements
 */
  return <div className ={"mainContainer"}>

    <div className={"titleContainer"}>
      Login
    </div>
    
    <br />

    <div className={"inputContainer"}>
      <i class='bx bx-user' ></i>
      <input 
        value={username}
        placeholder="Username"
        onChange={ev => {
          setUsername(ev.target.value)
          resetErrors();
          }
        }
        
        className={"inputBox"} />
      <label className="errorLabel">{userError}</label>
    </div>
    <br />

    <div className={"inputContainer"}>
      <i class='bx bx-lock-alt' ></i>
      <input 
        value = {password}
        placeholder="Password"
        onChange={ev => {
          setPassword(ev.target.value)
          resetErrors();
        }}
        className={"inputBox"} />
      <label className="errorLabel">{passwordError}</label>
    </div>
    <br />

    <div className={"login"}>
      <input 
        className={"inputButton"}
        type="button"
        onClick = {pressLogin}
        value={ "Log in" } />
    </div>

    <div className={"guestLogin"}>
      <input 
        className={"inputButtonG"}
        type="button"
        onClick = {loginAsGuest}
        value={ "Play as Guest" } />
    </div>

  </div>
}

export default Login
