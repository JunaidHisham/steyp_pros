import { useState } from "react";
import Counter from "./Counter";
import Employee from "./Employee";

function App() {
    let emp = [
        {
            name: "Junaid Hisham",
            age: 22,
        },
        {
            name: "Adarsh",
            age: 18,
        },
        {
            name: "awad",
            age: 24,
        },
    ];
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    };
    return (
        <div className="App">
            <button onClick={addCount}>ADD</button>

            <Counter title="Counter One" count={count} />
            {emp.map((event, i) => {
                return (
                    <>
                        {/* <Employee key={i} {...event} /> */}
                    </>
                );
            })}
        </div>
    );
}

export default App;
