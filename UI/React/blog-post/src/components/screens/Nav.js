import React from "react";
import styled from "styled-components";

function Nav() {
    return (
        <>
            <Header>
                <Wrapper>
                    <Left>
                        <Logo>
                            <LogoImage
                                src={require("../../assets/images/moke..png")}
                                alt="LOGO"
                            />
                        </Logo>
                    </Left>
                    <Right>
                        <Ul>
                            <Li>Get Signal</Li>
                            <Li>Support</Li>
                            <Li>Blog</Li>
                            <Li>Developers</Li>
                            <Li>Careers</Li>
                            <Li>Donate</Li>
                            <Li>
                                <ImgContainer>
                                    <FontIcon
                                        src={require("../../assets/images/twitter.png")}
                                        alt="Twitter"
                                    />
                                </ImgContainer>
                            </Li>
                            <Li>
                                <ImgContainer>
                                    <FontIcon
                                        src={require("../../assets/images/instagram.png")}
                                        alt="Instagram"
                                    />
                                </ImgContainer>
                            </Li>
                        </Ul>
                    </Right>
                </Wrapper>
            </Header>
        </>
    );
}

const Header = styled.header`
    background-color: #fff;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
`;
const Left = styled.div``;
const Logo = styled.h1`
    width: 120px;
`;
const LogoImage = styled.img`
    width: 100%;
    display: block;
`;
const Right = styled.div``;
const Ul = styled.ul`
    display: flex;
    align-items: center;
`;
const Li = styled.li`
    margin-right: 20px;
    font-size: 18px;
    &:last-child {
        margin-right: 0;
    }
`;
const ImgContainer = styled.div`
    width: 15px;
`;
const FontIcon = styled.img`
    width: 100%;
    display: block;
`;

export default Nav;
