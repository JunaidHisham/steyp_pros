import React, { useState } from "react";

function Counter() {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount);

    let updateCount = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevState) => prevState + 1)
        }
    };

    return (
        <div>
            <h1>Count {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => updateCount()}>Increment by 5</button>
            <hr />
        </div>
    );
}

export default Counter;
