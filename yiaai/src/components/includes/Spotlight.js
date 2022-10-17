import React from "react";
import styled from "styled-components";
import SpotBg from "../images/lines-bg.svg";

function Spotlight() {
    return (
        <>
            <SpotlightContainer>
                <SpotlightContainerWrapper>
                    <SpotlightBg>
                        <SpotlightLeftSection>
                            <TefunLogoBox>
                                <TefunLogo
                                    src={
                                        require("../images/Tefun-logo.svg")
                                            .default
                                    }
                                    alt="Tefun Logo"
                                />
                            </TefunLogoBox>
                            <Label>Technology Fundamental Program</Label>
                            <HeadingContent>
                                കേരളത്തിലെ
                                <HeadingGreenContent>
                                    20 ലക്ഷം
                                </HeadingGreenContent>
                                സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി
                                പഠിക്കാം!
                            </HeadingContent>
                            <Description>
                                ടാൽറോപ്പിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്ഫോമായ
                                'യായ്'-ലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ
                                പഠനം ആരംഭിക്കൂ.
                                <br /> Tefun-ലൂടെ ടെക്ക്നോളജിയുടെ വിസ്മയലോകം
                                ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ
                                എളുപ്പമാക്കാൻ 'yiaai' മൊബൈൽ ആപ്പ് ഡൗൺലോഡ്
                                ചെയ്യൂ.
                            </Description>
                            <Partners>
                                <PartnersImage
                                    src={
                                        require("../images/partners-images.svg")
                                            .default
                                    }
                                    alt="Partners"
                                />
                            </Partners>
                            <SpotlightButtons>
                                <JoinButton href="/tefun">
                                    Join for free
                                </JoinButton>
                                <RegisterButton>
                                    <ButtonLink href="#">
                                        Register school
                                    </ButtonLink>
                                </RegisterButton>
                            </SpotlightButtons>
                        </SpotlightLeftSection>

                        <SpotlightRightSection>
                            <SpotlightRightSectionTop>
                                <SpotlightRightSectionImageBox>
                                    <SpotlightHeroImage
                                        src={require("../images/spot-min.jpeg")}
                                        alt="Hero Image"
                                    />
                                    <ArrowImage
                                        src={
                                            require("../images/arrow.svg")
                                                .default
                                        }
                                        alt="Arrow"
                                    />
                                </SpotlightRightSectionImageBox>
                            </SpotlightRightSectionTop>
                            <SpotlightRightSectionBottom>
                                <InstallBox>
                                    <InstallationLinks href="/">
                                        <Applicationimage src={require("../images/grey-and-play.svg").default} alt="PlayStore" />
                                    </InstallationLinks>
                                    <InstallationLinks href="/">
                                        <Applicationimage src={require("../images/grey-app-play.svg").default} alt="AppStore" />
                                    </InstallationLinks>
                                </InstallBox>
                            </SpotlightRightSectionBottom>
                        </SpotlightRightSection>
                    </SpotlightBg>
                </SpotlightContainerWrapper>
            </SpotlightContainer>
        </>
    );
}

const SpotlightContainer = styled.section`
    padding-top: 100px;
`;
const SpotlightContainerWrapper = styled.section`
    width: 95%;
    margin: 0 auto;
    padding: 40px;
`;
const SpotlightBg = styled.div`
    background-color: #f3f9eb;
    padding: 90px 50px;
    background-image: url(${SpotBg});
    background-repeat: no-repeat;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
`;
const SpotlightLeftSection = styled.div`
    width: 48%;
`;
const TefunLogoBox = styled.div`
    margin-bottom: 20px;
`;
const TefunLogo = styled.img`
    display: block;
`;
const Label = styled.h4`
    font-size: 24px;
    margin-bottom: 20px;
    font-family: "gorditaregular";
`;
const HeadingContent = styled.h3`
    font-family: "ml-ttindulekhanormal";
    font-size: 45px;
    margin-bottom: 30px;
`;
const HeadingGreenContent = styled.span`
    color: rgb(15, 167, 111);
    margin: 0 7px;
`;
const Description = styled.p`
    font-family: "gorditaregular";
    font-size: 18px;
    color: rgb(84, 84, 84);
    line-height: 1.4;
    margin-bottom: 40px;
    width: 90%;
`;
const Partners = styled.div`
    margin-bottom: 20px;
`;
const PartnersImage = styled.img``;
const SpotlightButtons = styled.div`
    display: flex;
    align-items: center;
`;
const JoinButton = styled.a`
    background: linear-gradient(
        90deg,
        rgba(99, 187, 76) 0%,
        rgba(24, 152, 175) 50%,
        rgba(99, 187, 76) 100%
    );
    display: inline-block;
    width: 242px;
    height: 70px;
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
    margin-right: 30px;
    color: #fff;
    transition: 0.3s ease-in-out;
    background-position: 0% 50%;
    cursor: pointer;
    background-size: 200% !important;
    &:hover {
        background-position: 100% 200%;
    }
    padding-top: 20px;
`;
const RegisterButton = styled.div`
    display: flex;
    width: 242px;
    height: 70px;
    font-size: 18px;
    border-radius: 10px;
    padding: 2px;
    cursor: pointer;
    border: 3px solid;
    background: linear-gradient(
        90deg,
        rgba(99, 187, 76) 0%,
        rgba(24, 152, 175) 50%,
        rgba(99, 187, 76) 100%
    );
    border: none;
`;
const ButtonLink = styled.a`
    color: rgb(15, 167, 111);
    background-color: #fff;
    text-align: center;
    padding-top: 20px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;
const SpotlightRightSection = styled.div`
    width: 49%;

`;
const SpotlightRightSectionTop = styled.div``;
const SpotlightRightSectionImageBox = styled.div`
    position: relative;
`;
const SpotlightHeroImage = styled.img`
    width: 100%;
    border-radius: 20px;
    transform: rotate(2deg);
`;
const ArrowImage = styled.img`
    position: absolute;
    left: -15%;
    bottom: -12%;
    width: 25%;
`;

const SpotlightRightSectionBottom = styled.div`
    margin-top: 80px;
`
const InstallBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const InstallationLinks = styled.a`
    margin-right: 15px;
    &:last-child {
        margin-right: 0;
    }
`
const Applicationimage = styled.img``
export default Spotlight;
