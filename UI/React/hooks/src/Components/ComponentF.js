import React from "react";
import { UserContext, EmailContext } from "../App";

function ComponentF() {
    return (
        <div>
            {/* <UserContext.Consumer>
                {(name) => (
                    <EmailContext.Consumer>
                        {
                            (email) => (
                                <h1>My Name is {name} and my email is {email}</h1>
                            )
                        }
                    </EmailContext.Consumer>
                )}
            </UserContext.Consumer> */}
        </div>
    );
}

export default ComponentF;
