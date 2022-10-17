import React, { useState } from "react";

function Arrays() {
    const [items, setItems] = useState([{ name: "Junaid", id: 0 }]);
    const [input, setInput] = useState("");

    let addItems = () => {
        setItems([...items, {name:input,id:items.length}]);
        setInput("")
    };

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addItems}>Add</button>
            <hr />
        </div>
    );
}

export default Arrays;
