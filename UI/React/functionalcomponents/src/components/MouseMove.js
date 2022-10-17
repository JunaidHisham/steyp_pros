import React, { useEffect, useState } from "react";

function MouseMove() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    let logMousePositions = (e) => {
        console.log("Positions", e.clientX, e.clientY);
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };

    useEffect(() => {
        console.log("Effect Called");
        window.addEventListener("mousemove", logMousePositions);

        return () => {
            console.log("Unmounting...");
            window.removeEventListener("mousemove", logMousePositions);
        };
    }, []);

    return (
        <div>
            <h1>
                Mouse Position in X : {mouseX} Y : {mouseY}
            </h1>
        </div>
    );
}

export default MouseMove;
