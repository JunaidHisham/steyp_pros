import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import {UserContext, EmailContext} from "../App"

function ComponentE() {
    const username = useContext(UserContext)
    const email = useContext(EmailContext)
    return (
        <div>
            {/* <ComponentF /> */}
            <h1>My name is {username} and my email is {email}</h1>
        </div>
    );
}

export default ComponentE;
