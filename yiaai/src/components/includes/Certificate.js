import React from "react";
import styled from "styled-components";

function Certificate() {
    return (
        <>
            <CertificateContainer>
                <CertificateContainerWrapper>
                    <CertificateBackground>
                        <CertificateContentBox>
                            <Heading>Certification</Heading>
                            <Description>
                                പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ
                                വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ
                                സർട്ടിഫിക്കറ്റുകൾ.
                            </Description>
                            <Medal src={require("../images/medal.svg").default} alt="Medal" />
                        </CertificateContentBox>
                        <CertificateImageSection>
                            <CertificateImageBox>
                                <CertificateImage
                                    src={require("../images/certificate.png")}
                                    alt="Certificate"
                                />
                                <Arrow
                                    src={require("../images/arrow.svg").default}
                                    alt="Arrow"
                                />
                            </CertificateImageBox>
                        </CertificateImageSection>
                    </CertificateBackground>
                </CertificateContainerWrapper>
            </CertificateContainer>
        </>
    );
}

const CertificateContainer = styled.section`
    padding: 80px 0;
`;
const CertificateContainerWrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
`;
const CertificateBackground = styled.div`
    background-image: linear-gradient(
        to right,
        rgb(99, 187, 76) 0%,
        rgb(24, 152, 175) 100%
    );
    display: flex;
    position: relative;
    min-height: 300px;
    align-items: center;
    border-radius: 20px;
`;
const CertificateContentBox = styled.div`
    color: #fff;
    width: 55%;
    padding-left: 50px;
`;
const Heading = styled.h3`
    font-size: 35px;
    font-family: "gorditaregular";
    margin-bottom: 10px;
`;
const Description = styled.p`
    width: 80%;
    font-size: 20px;
    line-height: 1.3;
`;
const CertificateImageSection = styled.div`
    width: 45%;
    height: 100%;
    position: relative;
`;
const CertificateImageBox = styled.div`
    position: relative;
    height: 100% ;
    width: 100%;
`;
const CertificateImage = styled.img`
    position: absolute;
    width: 550px;
    bottom: -200px;
    right: 7%;
    @media all and (max-width:1280px) {
        width: 470px;
    }
`;
const Arrow = styled.img`
    position: absolute;
    bottom: -240px;
    left: -15%;
    width: 30%;
`;
const Medal = styled.img`
    position: absolute;
    top: 0;
    width: 45px;
`

export default Certificate;
