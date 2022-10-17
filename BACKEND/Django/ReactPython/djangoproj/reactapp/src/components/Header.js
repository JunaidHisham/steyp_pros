import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderContainerWrapper>
                    <HeaderLogo>
                        <LogoImage src="" alt="Logo" />
                    </HeaderLogo>
                </HeaderContainerWrapper>
            </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.ul`
    list-style: none;
`;
const HeaderContainerWrapper = styled.li``;
const HeaderLogo = styled.h1``
const LogoImage = styled.img``

export default Header;
