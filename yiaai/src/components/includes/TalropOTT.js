import React from "react";
import styled from "styled-components";
import OTTBg from "../images/lines-bg.svg"

function TalropOTT() {
    return (
        <>
            <TalropOTTContainer>
                <TalropOTTContainerWrapper>
                    <TalropOTTBackground>
                        <TalropOTTLeft>
                            <TalropOTTContentHeading>
                                ടാൽറോപിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്‌ഫോമായ
                                യായിലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം
                                ആരംഭിക്കൂ
                            </TalropOTTContentHeading>
                            <Description>
                                <b>Tefun</b>
                                -ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ
                                നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ
                                എളുപ്പമാക്കാൻ
                                <span style={{fontSize:"22px"}}>yia.ai</span>
                                മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                            </Description>
                            <AppBox>
                                <PlayStore href="/">
                                    <AppImage src={require("../images/green-and-play.svg").default} alt="Image" />
                                </PlayStore>
                                <PlayStore href="/">
                                    <AppImage src={require("../images/green-app-play.svg").default} alt="Image" />
                                </PlayStore>
                            </AppBox>
                        </TalropOTTLeft>
                        <TalropOTTRight>
                            <TalropOTTImageContainer>
                                <TalropOTTImage src={require("../images/mobile-app.png")} alt="Mobile App" />
                            </TalropOTTImageContainer>
                        </TalropOTTRight>
                    </TalropOTTBackground>
                </TalropOTTContainerWrapper>
            </TalropOTTContainer>
        </>
    );
}

const TalropOTTContainer = styled.section`
    padding: 50px 0;
`;
const TalropOTTContainerWrapper = styled.section`
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
`;
const TalropOTTBackground = styled.div`
    background-color: rgb(243, 249, 235);
    background-image: url(${OTTBg});
    background-repeat: no-repeat;
    background-position: left 10% top 0 ;
    background-size: 700px;
    border-radius: 20px;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const TalropOTTLeft = styled.div`
    width: 50%;
`;
const TalropOTTContentHeading = styled.h3`
    font-size: 35px;
    width: 90%;
    /* font-family: "ml-ttindulekhanormal"; */
    margin-bottom: 35px;
`;
const Description = styled.p`
    width: 90%;
    font-size: 20px;
    color: rgb(100, 101, 99);
    margin-bottom: 30px;
    line-height: 1.3em;
    font-family: "gorditaregular";
`;
const AppBox = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
`
const PlayStore = styled.a`
    display: block;
    margin-right: 10px;
    width: 150px;
`;
const AppImage = styled.img`
    display: block;
    width: 100%;
`;
const TalropOTTRight = styled.div`
    width: 50%;
    height: 100%;
`
const TalropOTTImageContainer = styled.div`
    width: 100%;
`
const TalropOTTImage = styled.img`
    display: block;
    width: 53%;
    position: absolute;
    bottom: 0%;
    right: 0;

`
export default TalropOTT;
