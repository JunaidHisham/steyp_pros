import React from "react";
import img from "../../src/Assets/car.jpeg";
import bulb from "../../src/Assets/bulb.svg";
import ReactDOM from 'react-dom';
import { ReactComponent as Clock } from "../../src/Assets/brightbulb.svg";

function ImportMethod() {
    return (
        <>
            <Clock width="300" />
            <img width="400" src={bulb} alt="Image" />
            <img width="400" src={img} alt="Image" />
            <img width="400" src={require("../../src/Assets/car2.jpeg")} />
            <img
                width="400"
                src={
                    "https://image.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg"
                }
                alt="Image"
            />
        </>
    );
}
export default ImportMethod;
