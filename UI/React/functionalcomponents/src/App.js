import "./App.css";
import React from "react";
import HookCounter from "./components/HookCounter";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import Object from "./components/Objects";
import Arrays from "./components/Arrays";
import ClassCounter from "./components/ClassCounter";
import MouseMove from "./components/MouseMove";
import Container from "./components/Container";

function App() {
    return (
        <div className="App">
            <Container />
            <MouseMove />
            <ClassCounter />
            <Arrays />
            <Object/>
            <Counter />
            <HelloWorld/>
        </div>
    );
}

export default App;
