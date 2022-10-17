import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

class App extends Component {
    render() {
        return (
            <>
                <h1>Hello World</h1>
                <Heading>Hello World3</Heading>
                <Heading>Hello World1</Heading>
                <Heading>Hello World2</Heading>
            </>
        );
    }
}

const Heading = styled.h1`
    font-size: 40px;
    color:blue;
    &:hover {
      color:red;
      cursor: pointer;
    }
`;

export default App;
