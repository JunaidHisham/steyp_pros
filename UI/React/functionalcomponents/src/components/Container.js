import React, { useState } from "react";
import MouseMove from "./MouseMove";

function Container() {
    const [loading, setLoading] = useState(true);
    return (
        <div>
            {loading && <MouseMove />}
            <button onClick={() => setLoading(!loading)}>Toggle Load</button>
        </div>
    );
}

export default Container;
