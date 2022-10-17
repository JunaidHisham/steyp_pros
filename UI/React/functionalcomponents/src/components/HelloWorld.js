import React, { useState } from "react";

function HelloWorld() {
    const [name, setName] = useState("Junaid");
    const [age, setAge] = useState(18);
    return (
        <div>
            <h1>My Name is {name}</h1>
            <h1>My Age is {age}</h1>
            <button onClick={() => setName("Hisham")}>Update Name</button>
            <button onClick={() => setAge((preState) => preState + 1)}>Increase Age</button>
            <hr />
        </div>
    );
}

export default HelloWorld;
