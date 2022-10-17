import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../../App.css";

function Header() {
    const [showNavbg, setShowNavbg] = useState(false);

    const showNavBar = () => {
        if (window.scrollY > 20) {
            setShowNavbg(true);
        } else {
            setShowNavbg(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", showNavBar);
        return () => {
            window.removeEventListener("scroll", showNavBar);
        };
    }, []);

    return (
        <>
            <HeaderContainer className={`${showNavbg && "active"}`}>
                <HeaderContainerWrapper>
                    <HeaderLogo>
                        <Logoimage
                            src={require("../images/logo.svg").default}
                            alt="Logo"
                        />
                    </HeaderLogo>
                    <HeaderButton href="#">Join now</HeaderButton>
                </HeaderContainerWrapper>
            </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.header`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    transition: 0.3s ease-in-out;
    z-index: 5;
`;
const HeaderContainerWrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const HeaderLogo = styled.h1`
    width: 123px;
`;
const Logoimage = styled.img`
    width: 100%;
    display: block;
`;
const HeaderButton = styled.a`
    text-decoration: none;
    background: linear-gradient(
        90deg,
        rgba(99, 187, 76) 0%,
        rgba(24, 152, 175) 50%,
        rgba(99, 187, 76) 100%
    );
    display: inline-block;
    padding: 15px 30px 20px 30px;
    font-size: 18px;
    border-radius: 5px;
    color: #fff;
    transition: 0.3s ease-in-out;
    background-position: 0% 50%;
    background-size: 200% !important;
    &:hover {
        background-position: 100% 200%;
    }
`;

export default Header;
