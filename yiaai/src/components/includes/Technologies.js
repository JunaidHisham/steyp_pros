import React from "react";
import styled from "styled-components";
import "../../App.css";

function Technologies() {
    return (
        <>
            <TechnologyContainer>
                <TechnologyContainerWrapper>
                    <TechnologyHeadingTop>
                        <TechnologyHeading>
                            പുതിയ ടെക്ക്നോളജികൾ മനസ്സിലാക്കാം
                        </TechnologyHeading>
                        <TechnologySubHeading>
                            ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന
                            സിലബസ്.
                        </TechnologySubHeading>
                    </TechnologyHeadingTop>
                    <TechnologyContents>
                        <TechnologyContentsUl>
                            <TechnologyContentsLi>
                                <TechnologyContentImageBox>
                                    <TechnologyContentImage
                                        src={require("../images/ai.jpg")}
                                        alt="Image"
                                    />
                                </TechnologyContentImageBox>
                                <TechName>Artificial Intelligence</TechName>
                            </TechnologyContentsLi>
                            <TechnologyContentsLi>
                                <TechnologyContentImageBox>
                                    <TechnologyContentImage
                                        src={require("../images/robotics.jpg")}
                                        alt="Image"
                                    />
                                </TechnologyContentImageBox>
                                <TechName>Robotics</TechName>
                            </TechnologyContentsLi>
                            <TechnologyContentsLi>
                                <TechnologyContentImageBox>
                                    <TechnologyContentImage
                                        src={require("../images/meta.jpg")}
                                        alt="Image"
                                    />
                                </TechnologyContentImageBox>
                                <TechName>Metaverse</TechName>
                            </TechnologyContentsLi>
                            <TechnologyContentsLi>
                                <TechnologyContentImageBox>
                                    <TechnologyContentImage
                                        src={require("../images/3d.jpg")}
                                        alt="Image"
                                    />
                                </TechnologyContentImageBox>
                                <TechName>3D Printing</TechName>
                            </TechnologyContentsLi>
                            <TechnologyContentsLi>
                                <TechnologyContentImageBox>
                                    <TechnologyContentImage
                                        src={require("../images/web3.0.jpg")}
                                        alt="Image"
                                    />
                                </TechnologyContentImageBox>
                                <TechName>Web 3.0</TechName>
                            </TechnologyContentsLi>
                            <TechnologyContentsLi>
                                <TechnologyContentImageBox>
                                    <TechnologyContentImage
                                        src={require("../images/arvr.jpg")}
                                        alt="Image"
                                    />
                                </TechnologyContentImageBox>
                                <TechName>AR & VR</TechName>
                            </TechnologyContentsLi>
                            <TechnologyContentsLi>
                                <TechnologyContentImageBox>
                                    <TechnologyContentImage
                                        src={require("../images/iot.jpg")}
                                        alt="Image"
                                    />
                                </TechnologyContentImageBox>
                                <TechName>IoT</TechName>
                            </TechnologyContentsLi>
                            <TechnologyContentsLi>
                                <TechnologyContentImageBox>
                                    <TechnologyContentImage
                                        src={require("../images/car.jpg")}
                                        alt="Image"
                                    />
                                </TechnologyContentImageBox>
                                <TechName>Driverless Cars</TechName>
                                <TopicsNumber>
                                    <CardImage
                                        src={
                                            require("../images/card.svg")
                                                .default
                                        }
                                    />
                                </TopicsNumber>
                            </TechnologyContentsLi>
                        </TechnologyContentsUl>
                    </TechnologyContents>
                </TechnologyContainerWrapper>
            </TechnologyContainer>
        </>
    );
}

const TechnologyContainer = styled.section``;
const TechnologyContainerWrapper = styled.section`
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
`;
const TechnologyHeadingTop = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;
const TechnologyHeading = styled.h2`
    margin-bottom: 20px;
    color: rgb(15, 167, 111);
    font-size: 30px;
    font-family: "ml-ttindulekhanormal";
`;
const TechnologySubHeading = styled.p`
    font-family: "gorditaregular";
    font-size: 22px;
    max-width: 500px;
    margin: 0 auto;
`;
const TechnologyContents = styled.div`
    padding: 20px 0;
`;
const TechnologyContentsUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    @media all and (max-width: 1140px) {
        justify-content: center;
    }
`;
const TechnologyContentsLi = styled.li`
    width: 24%;
    border-radius: 10px;
    background-color: rgb(227, 244, 230);
    margin-bottom: 20px;
    padding: 15px;
    position: relative;
    &:nth-child(2n) {
        background-color: rgb(255, 248, 228);
    }
    &:nth-child(3n) {
        background-color: rgb(239, 234, 250);
    }
    @media all and (max-width: 1140px) {
        width: 30%;
        margin: 0 10px 20px;
    }
`;
const TechnologyContentImageBox = styled.div`
    overflow: hidden;
    margin-bottom: 20px;
`;
const TechnologyContentImage = styled.img`
    width: 100%;
    border-radius: 10px;
`;
const TechName = styled.h3`
    text-align: center;
    font-weight: 400;
`;
const TopicsNumber = styled.span`
    display: inline-block;
    width: 230px;
    position: absolute;
    right : -35%;
    bottom: -30%;
`;
const CardImage = styled.img`
    width: 90%;
`;

export default Technologies;
