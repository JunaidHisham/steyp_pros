import React, { useEffect, useState } from "react";

function HookCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const incrementCounter = () => {
        setCount((prev) => prev + 1);
    };

    useEffect(() => {
        console.log("hello");
        document.title = `Current counter value is ${count}`;
    }, [count]);
    //useEffect using while updating name input field
    useEffect(() => {
        console.log("Name");
    }, [name]);

    //useEffect using only once
    useEffect (()=> {
        console.log("Mounting...");
    }, [])

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => incrementCounter()}>
                Increment {count}
            </button>
            <hr />
        </div>
    );
}

export default HookCounter;
