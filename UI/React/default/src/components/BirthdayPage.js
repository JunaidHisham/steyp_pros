import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import one from "../assets/images/Ellipse -1.png" ;
import two from "../assets/images/Ellipse -2.png";
import three from "../assets/images/Ellipse -3.png";
import four from "../assets/images/Ellipse -4.png";
import five from "../assets/images/Ellipse 1.png";

function BirthdayPage() {
    const [profiles, setProfiles] = useState([
        {
            name: "Joshua Vergaara",
            age: 23,
            photo: one,
        },
        {
            name: "Danny Winget",
            age: 25,
            photo: two,
        },
        {
            name: "Hester Hogan",
            age: 23,
            photo: three,
        },
        {
            name: "Griffin Wooldridge",
            age: 20,
            photo: four,
        },
        {
            name: "Jon Rettinger",
            age: 20,
            photo: five,
        }
    ]);
    console.log(profiles);
    const renderItems = () => {
        return profiles.map((item) => (
            <Persons>
                <Left>
                    <ImageContainer>
                        <Photo src={item.photo} />
                    </ImageContainer>
                </Left>
                <Right>
                    <Name>{item.name}</Name>
                    <Age>{item.age} Years</Age>
                </Right>
            </Persons>
        ));
    };

    return (
        <Container>
            <Heading>5 birthdays today</Heading>
            {renderItems()}
            <Button>Clear All</Button>
        </Container>
    );
}

const Container = styled.section`
    width: 30%;
    margin: 0 auto;
    padding: 50px 0;
`;
const Heading = styled.h1`
    text-align: center;
    font-family: "Baloo Paaji 2";
    font-size: 2rem;
    margin-bottom: 30px;
`;
const Persons = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;
const Left = styled.div`
    width: 150px;
`;
const ImageContainer = styled.div`
    width: 130px;
`;
const Photo = styled.img`
    display: block;
    width: 100%;
`;
const Right = styled.div`
    width: calc(100% - 150px);
`;
const Name = styled.h2`
    font-family: "Baloo Paaji 2";
`;
const Age = styled.p`
    color: #868f9c;
`;
const Button = styled.button`
    width: 100%;
    padding: 10px 0;
    font-size: 20px;
    background: #d65994;
    outline: none;
    border: none;
    border-radius: 8px;
    color: #fff;
`;
export default BirthdayPage;
