import React from "react";
import styled from "styled-components";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterContainerWrapper>
                    <FooterContainerTop>
                        <FooterLogoContainer>
                            <FooterLogo
                                src={require("../images/logo-grey.svg").default}
                            />
                        </FooterLogoContainer>
                        <SocialLinks>
                            <Social>
                                <Applications>
                                    <ApplicationLink href="#">
                                        <Instagram />
                                    </ApplicationLink>
                                </Applications>
                                <Applications>
                                    <ApplicationLink href="#">
                                        <Facebook />
                                    </ApplicationLink>
                                </Applications>
                                <Applications>
                                    <ApplicationLink href="#">
                                        <Twitter />
                                    </ApplicationLink>
                                </Applications>
                                <Applications>
                                    <ApplicationLink href="#">
                                        <LinkedinIn />
                                    </ApplicationLink>
                                </Applications>
                                <Applications>
                                    <ApplicationLink href="#">
                                        <Youtube />
                                    </ApplicationLink>
                                </Applications>
                            </Social>
                        </SocialLinks>
                        <Contact>
                            <Contacts>
                                <ContactLi>
                                    <ContactLink
                                        href="https://wa.me/+918848903912"
                                        target="blank"
                                    >
                                        +91 8848903912
                                    </ContactLink>
                                </ContactLi>
                                <ContactLi>
                                    <ContactLink href="mailto:amalambrose@example.com">
                                        amalambrose@example.com
                                    </ContactLink>
                                </ContactLi>
                            </Contacts>
                        </Contact>
                        <FooterBottom>
                            <Copyright>
                                <L href="https://talrop.com/">&copy; 2022, Talrop Private Limited</L>
                            </Copyright>
                            <Terms>
                                <TermsItem>
                                    
                                </TermsItem>
                                <TermsItem>
                                    <L href="#">Privacy Policy</L>
                                </TermsItem>
                            </Terms>
                        </FooterBottom>
                    </FooterContainerTop>
                </FooterContainerWrapper>
            </FooterContainer>
        </>
    );
}

const FooterContainer = styled.footer`
    background-color: rgb(30, 30, 30);
    padding: 100px 0 50px;
`;
const FooterContainerWrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
    font-size: 15px;
`;
const FooterContainerTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: 0 auto;
`;
const FooterLogoContainer = styled.div`
    width: 100px;
    margin-bottom: 30px;
`;
const FooterLogo = styled.img`
    width: 100%;
    display: block;
`;
const SocialLinks = styled.div`
    margin-bottom: 20px;
`;
const Social = styled.ul`
    list-style: none;
    display: flex;
`;
const Applications = styled.li`
    margin-right: 15px;
    &:last-child {
        margin-right: 0;
    }
`;

const ApplicationLink = styled.a`
    color: rgb(170, 170, 170);
    font-size: 20px;
`;
// Social Icons //
const Instagram = styled(BsInstagram)`
    &:hover {
        color: red;
    }
`;
const Facebook = styled(FaFacebookF)`
    &:hover {
        color: blue;
    }
`;
const Twitter = styled(BsTwitter)`
    &:hover {
        color: #6eb9eb;
    }
`;
const LinkedinIn = styled(FaLinkedinIn)`
    &:hover {
        color: blue;
    }
`;
const Youtube = styled(FaYoutube)`
    &:hover {
        color: red;
    }
`;
const Contact = styled.div`
    width: 100%;
`;
const Contacts = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    width: 100%;
`;
const ContactLi = styled.li`
    margin-right: 15px;
`;
const ContactLink = styled.a`
    color: rgb(170, 170, 170);
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`;
const Copyright = styled.p`
    color: rgb(170, 170, 170);
`;
const Terms = styled.ul`
    list-style: none;
    display: flex;
`;
const TermsItem = styled.li`
    margin-right: 10px;
    &:last-child {
        margin-right: 0;
    }
`;
const L = styled.a`
    color: #fff;
    color: rgb(170, 170, 170);
`;

export default Footer;
