import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

function Nav() {
    return (
        <>
            <Helmet>
                <title>Places | Moke Travel</title>
            </Helmet>
            <Header>
                <Wrapper>
                    <Logo>
                        <LogoImg src={require("../../assets/images/logo.svg").default}/>
                    </Logo>
                    <Button>Login</Button>
                </Wrapper>
            </Header>
        </>
    );
}

const Header = styled.section`
    padding: 20px 0;
    margin-bottom: 100px;   
`;
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.h1`
    width: 150px;`;
const LogoImg = styled.img`
    width: 100%;
    display: block;
`;
const Button = styled.a`
    display: inline-block;
    padding: 10px 40px;
    background-color: #036bf6;
    color:#fff;
    font-size: 20px;
    border-radius: 5px;
`;

export default Nav;
