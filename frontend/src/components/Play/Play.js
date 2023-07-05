import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Play() {
    /* Check condition to see if user is logged in */
    let loggedIn = false;
    const history = useHistory();

    if(loggedIn === false) {
        history.push("/login");
    }

    return(
        <h2>Play</h2>
    );
}
